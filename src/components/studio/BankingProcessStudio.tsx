import React, { useState, useEffect } from 'react'
import {
  Cpu,
  Workflow,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  Play,
  CheckCircle2,
  RefreshCw,
  Code2,
  Database,
  ArrowRight,
  TrendingUp,
  Clock,
  Layers,
  Sparkles,
  Sliders,
  Terminal,
} from 'lucide-react'
import { StatCard } from '../ui/StatCard'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export interface TraceRecord {
  id: string
  timestamp: string
  type: string
  rail: string
  amount: string
  status: 'PROCESSED' | 'ROUTED' | 'SETTLED'
  latency: string
}

export const BankingProcessStudio: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<1 | 2 | 3>(1)
  const [isSimulating, setIsSimulating] = useState(false)
  const [flashCounters, setFlashCounters] = useState(false)
  const [activeTab, setActiveTab] = useState<'visual' | 'payload' | 'telemetry'>('visual')
  const [totalProcessed, setTotalProcessed] = useState(142850)
  const [currentLoad, setCurrentLoad] = useState('2.4k Requests/s')
  const [avgLatency, setAvgLatency] = useState('3.2ms')

  const [traces, setTraces] = useState<TraceRecord[]>([
    {
      id: 'TXN-90281-AF',
      timestamp: '10:24:12.890',
      type: 'pacs.008.001.10',
      rail: 'NIBSS Instant',
      amount: '₦4,250,000.00',
      status: 'SETTLED',
      latency: '2.8ms',
    },
    {
      id: 'TXN-90282-BC',
      timestamp: '10:24:13.104',
      type: 'pain.001.001.09',
      rail: 'RTGS Gross',
      amount: '₦18,900,000.00',
      status: 'PROCESSED',
      latency: '3.4ms',
    },
    {
      id: 'TXN-90283-DE',
      timestamp: '10:24:13.342',
      type: 'camt.053.001.08',
      rail: 'Multi-Rail Liquidity',
      amount: '$120,000.00',
      status: 'ROUTED',
      latency: '3.1ms',
    },
  ])

  // Chart data for throughput
  const telemetryData = [
    { time: '10:00', ingress: 2100, egress: 2090 },
    { time: '10:05', ingress: 2250, egress: 2240 },
    { time: '10:10', ingress: 2400, egress: 2395 },
    { time: '10:15', ingress: 2350, egress: 2340 },
    { time: '10:20', ingress: 2500, egress: 2490 },
    { time: '10:25', ingress: 2420, egress: 2415 },
  ]

  // Micro-interaction: When simulated, flash text container with #008DDA for 400ms per UI/UX Spec §5.2
  const handleSimulateTransaction = () => {
    setIsSimulating(true)
    setFlashCounters(true)

    setTimeout(() => {
      setTotalProcessed((prev) => prev + 1)
      const randomAmount = (Math.random() * 5000000 + 50000).toLocaleString('en-NG', {
        style: 'currency',
        currency: 'NGN',
      })
      const newTrace: TraceRecord = {
        id: `TXN-${Math.floor(Math.random() * 89999 + 10000)}-CF`,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) + '.042',
        type: selectedStep === 1 ? 'pacs.008 (Credit Transfer)' : selectedStep === 2 ? 'core.journal.lock' : 'settlement.dispatch',
        rail: 'ISO 20022 High-Throughput Rail',
        amount: randomAmount,
        status: 'SETTLED',
        latency: `${(Math.random() * 1.5 + 2.1).toFixed(1)}ms`,
      }
      setTraces((prev) => [newTrace, ...prev.slice(0, 5)])
      setIsSimulating(false)
    }, 400)

    setTimeout(() => {
      setFlashCounters(false)
    }, 450)
  }

  const stepDetails = {
    1: {
      title: 'Step 1: Real-Time Ingestion Node',
      subtitle: 'Message validation, signature verification, and schema translation',
      specs: [
        { label: 'Protocols', value: 'ISO 20022 (pacs/camt/pain), REST, gRPC' },
        { label: 'Security Layer', value: 'mTLS 1.3, HSM Signature Verification, AES-256' },
        { label: 'Payload Format', value: 'XML / JSON schema synchronized' },
        { label: 'Ingress Throughput', value: '45,000 msgs/sec parallel ingress' },
        { label: 'Average Buffer Lag', value: '0.4ms Kafka Partition Queue' },
      ],
      payloadSample: `{
  "MessageId": "MSG-20261005-ISO-90281",
  "CreationDateTime": "2026-10-05T10:24:12.890Z",
  "InstructingAgent": "CENTNGLAXXX",
  "CreditorAccount": "0128947219",
  "SettlementAmount": {
    "Currency": "NGN",
    "Value": 4250000.00
  },
  "RemittanceInformation": "Enterprise Treasury Settlement",
  "IntegrityHash": "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}`,
    },
    2: {
      title: 'Step 2: High-Speed Core Processing Engine',
      subtitle: 'Balance lock, atomic double-entry journal commit, and rule-based risk evaluation',
      specs: [
        { label: 'Ledger Engine', value: 'Append-Only Event-Sourced Coreless Ledger' },
        { label: 'Consensus Mode', value: 'Multi-Raft In-Memory Zero-Lock Commit' },
        { label: 'Compliance Checks', value: 'Sanctions List, AML Velocity, Multi-Tier Limits' },
        { label: 'State Latency', value: '1.2ms write commit to active replicated nodes' },
        { label: 'Audit Trail', value: 'Cryptographic Merkle tree receipt generation' },
      ],
      payloadSample: `{
  "TransactionId": "TXN-90281-AF",
  "DoubleEntryJournal": {
    "DebitAccount": "ACC-CORP-RESERVE-01",
    "CreditAccount": "ACC-INTERBANK-CLEARING-09",
    "Amount": 4250000.00,
    "Currency": "NGN"
  },
  "RuleEvaluation": {
    "AMLScore": 0.02,
    "LimitExceeded": false,
    "Decision": "AUTO_APPROVED"
  },
  "LedgerBlockSequence": 4928104
}`,
    },
    3: {
      title: 'Step 3: Multi-Rail Distribution & Telemetry',
      subtitle: 'Clearing dispatch, multi-bank switch settlement, and real-time observability',
      specs: [
        { label: 'Settlement Rails', value: 'NIBSS Instant, RTGS, SEPA, FedNow, SWIFT GPI' },
        { label: 'Webhook Dispatch', value: 'Guaranteed at-least-once delivery with exponential backoff' },
        { label: 'Observability', value: 'OpenTelemetry, Prometheus, Grafana Metric Pipeline' },
        { label: 'Settlement Confirmation', value: 'pacs.002 Payment Status Report emitted' },
        { label: 'Reconciliation', value: 'Automated end-of-day zero-variance balancing' },
      ],
      payloadSample: `{
  "SettlementNotification": {
    "OriginalMessageId": "MSG-20261005-ISO-90281",
    "TransactionStatus": "ACCP (Accepted Customer Profile)",
    "ClearingNetworkReference": "NIBSS-CLR-20261005-89104",
    "SettlementTimestamp": "2026-10-05T10:24:13.120Z",
    "EmittedEvents": [
      "event.ledger.settled",
      "event.webhook.customer_notified",
      "event.telemetry.logged"
    ]
  }
}`,
    },
  }

  const currentStep = stepDetails[selectedStep]

  return (
    <div className="space-y-6 text-left">
      {/* ─── Breadcrumb Banner for Template B ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
            <span>Home</span>
            <span>&gt;</span>
            <span>Solutions</span>
            <span>&gt;</span>
            <span className="text-[#0F2C59] font-bold">Banking Framework</span>
          </div>
          <h1 className="text-[26px] sm:text-[32px] font-bold text-[#0F2C59] tracking-tight">
            Technical Capabilities & Visual Studio Dashboard
          </h1>
          <p className="text-xs sm:text-[13px] text-[#64748B] mt-0.5">
            Optimized for enterprise developers, financial system architects, and compliance officers evaluating core technology metrics.
          </p>
        </div>

        {/* Global Action Trigger */}
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFlashCounters(true)
              setTimeout(() => setFlashCounters(false), 400)
            }}
            leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
          >
            Poll Nodes
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSimulateTransaction}
            isLoading={isSimulating}
            leftIcon={<Play className="h-3.5 w-3.5 fill-current" />}
          >
            Simulate Transaction
          </Button>
        </div>
      </div>

      {/* ─── 3 SUMMARY METRIC CARDS (UI/UX Spec §4.2 Wireframe) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: System Status: 100% */}
        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 shadow-none transition-fin hover:border-[#CBD5E1]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              SYSTEM AVAILABILITY
            </span>
            <div className="h-8 w-8 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
              <ShieldCheck className="h-4.5 w-4.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span
              className={`text-[28px] font-bold text-[#0F2C59] tracking-tight transition-colors rounded-[2px] px-1 -mx-1 ${
                flashCounters ? 'animate-data-flash' : ''
              }`}
            >
              System Status: 100%
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0] flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>Operational</span>
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
            <span>Active-Active Multi-Region Core</span>
            <span className="font-semibold text-[#10B981]">99.999% SLA Uptime</span>
          </div>
        </div>

        {/* Card 2: Hybrid Cloud Core */}
        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 shadow-none transition-fin hover:border-[#CBD5E1]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              CORE ARCHITECTURE
            </span>
            <div className="h-8 w-8 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] flex items-center justify-center">
              <Server className="h-4.5 w-4.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span
              className={`text-[28px] font-bold text-[#0F2C59] tracking-tight transition-colors rounded-[2px] px-1 -mx-1 ${
                flashCounters ? 'animate-data-flash' : ''
              }`}
            >
              Hybrid Cloud Core
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">
              Multi-Cloud
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
            <span>Consensus Latency: &lt; {avgLatency}</span>
            <span className="font-semibold text-[#008DDA]">Zero Data Loss Sync</span>
          </div>
        </div>

        {/* Card 3: Active API Load */}
        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 shadow-none transition-fin hover:border-[#CBD5E1]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              INGRESS THROUGHPUT
            </span>
            <div className="h-8 w-8 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
              <Zap className="h-4.5 w-4.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span
              className={`text-[28px] font-bold text-[#0F2C59] tracking-tight transition-colors rounded-[2px] px-1 -mx-1 ${
                flashCounters ? 'animate-data-flash' : ''
              }`}
            >
              {currentLoad}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-[#10B981]" />
              <span>Real-Time</span>
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
            <span>Today's Total: {totalProcessed.toLocaleString()} txns</span>
            <span className="font-semibold text-[#10B981]">Peak: 4.8k req/s</span>
          </div>
        </div>
      </div>

      {/* ─── INTERACTIVE PROCESS MODELER DISPLAY CANVAS (UI/UX Spec §4.2) ─── */}
      <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] overflow-hidden shadow-none">
        {/* Canvas Header Bar */}
        <div className="p-5 border-b border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[4px] bg-[#008DDA] text-white flex items-center justify-center font-bold">
              <Workflow className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">
                INTERACTIVE PROCESS MODELER DISPLAY CANVAS
              </h2>
              <p className="text-xs text-[#64748B]">
                Click each pipeline node below to inspect real-time schemas, execution paths, and performance parameters.
              </p>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-xs">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 rounded-[3px] font-semibold transition-colors ${
                activeTab === 'visual'
                  ? 'bg-[#FFFFFF] text-[#0F2C59] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
              }`}
            >
              Visual Workflow
            </button>
            <button
              onClick={() => setActiveTab('payload')}
              className={`px-3 py-1.5 rounded-[3px] font-semibold transition-colors ${
                activeTab === 'payload'
                  ? 'bg-[#FFFFFF] text-[#0F2C59] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
              }`}
            >
              Schema & JSON Payload
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-3 py-1.5 rounded-[3px] font-semibold transition-colors ${
                activeTab === 'telemetry'
                  ? 'bg-[#FFFFFF] text-[#0F2C59] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
              }`}
            >
              Throughput Curve
            </button>
          </div>
        </div>

        {/* ─── Visual Pipeline Nodes: [Step 1: Ingestion] ----> [Step 2: Processing] ----> [Step 3: Distribution] ─── */}
        <div className="p-6 sm:p-8 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 relative">
            {/* Step 1 Node */}
            <div
              onClick={() => setSelectedStep(1)}
              className={`cursor-pointer rounded-[8px] p-5 border transition-fin relative ${
                selectedStep === 1
                  ? 'bg-[#FFFFFF] border-[#008DDA] shadow-xs ring-2 ring-[#008DDA]/20'
                  : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                  NODE 01
                </span>
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-[#0F2C59] mt-2 mb-1 flex items-center gap-1.5">
                <span>[Step 1: Ingestion]</span>
              </h3>
              <p className="text-xs text-[#64748B] line-clamp-2">
                Multi-protocol ISO 20022 message intake, mTLS verification, and buffer queueing.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                <span className="text-[#64748B]">Latency: 0.8ms</span>
                <span className="text-[#10B981] font-semibold">Ready</span>
              </div>
            </div>

            {/* Step 2 Node */}
            <div
              onClick={() => setSelectedStep(2)}
              className={`cursor-pointer rounded-[8px] p-5 border transition-fin relative ${
                selectedStep === 2
                  ? 'bg-[#FFFFFF] border-[#008DDA] shadow-xs ring-2 ring-[#008DDA]/20'
                  : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                  NODE 02
                </span>
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-[#0F2C59] mt-2 mb-1 flex items-center gap-1.5">
                <span>[Step 2: Processing]</span>
              </h3>
              <p className="text-xs text-[#64748B] line-clamp-2">
                Atomic coreless ledger lock, multi-tier compliance evaluation, and journal commit.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                <span className="text-[#64748B]">Latency: 1.4ms</span>
                <span className="text-[#10B981] font-semibold">Active</span>
              </div>
            </div>

            {/* Step 3 Node */}
            <div
              onClick={() => setSelectedStep(3)}
              className={`cursor-pointer rounded-[8px] p-5 border transition-fin relative ${
                selectedStep === 3
                  ? 'bg-[#FFFFFF] border-[#008DDA] shadow-xs ring-2 ring-[#008DDA]/20'
                  : 'bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                  NODE 03
                </span>
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-[#0F2C59] mt-2 mb-1 flex items-center gap-1.5">
                <span>[Step 3: Distribution]</span>
              </h3>
              <p className="text-xs text-[#64748B] line-clamp-2">
                Multi-rail clearing dispatch, webhook callbacks, and telemetry event streaming.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                <span className="text-[#64748B]">Latency: 1.0ms</span>
                <span className="text-[#10B981] font-semibold">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Node Inspector View / Active Tab Content ─── */}
        <div className="p-6">
          {activeTab === 'visual' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Node Specifications (Span 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                    ACTIVE NODE INSPECTOR
                  </span>
                  <h3 className="text-lg font-bold text-[#0F2C59] mt-0.5">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">{currentStep.subtitle}</p>
                </div>

                <div className="rounded-[6px] border border-[#E2E8F0] divide-y divide-[#E2E8F0] bg-[#FFFFFF] overflow-hidden text-xs">
                  {currentStep.specs.map((item) => (
                    <div key={item.label} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-[#475569]">{item.label}</span>
                      <span className="font-mono text-[#0F2C59] bg-[#F1F5F9] px-2 py-0.5 rounded-[3px]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleSimulateTransaction}
                    isLoading={isSimulating}
                  >
                    Send Test Packet to Node {selectedStep}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedStep(selectedStep === 3 ? 1 : ((selectedStep + 1) as any))}
                  >
                    Advance Step
                  </Button>
                </div>
              </div>

              {/* Live Trace Stream (Span 5) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F2C59] flex items-center gap-1.5">
                    <Activity className="h-4 w-4 text-[#008DDA]" />
                    <span>Real-Time Execution Trace</span>
                  </span>
                  <span className="text-[11px] text-[#64748B]">Auto-refreshing</span>
                </div>

                <div className="space-y-2">
                  {traces.map((trace) => (
                    <div
                      key={trace.id}
                      className="p-3 rounded-[6px] border border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#CBD5E1] transition-colors flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#0F2C59]">{trace.id}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-[2px] bg-[#D1FAE5] text-[#065F46] font-semibold">
                            {trace.status}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#64748B] block mt-0.5">
                          {trace.rail} · {trace.amount}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[11px] text-[#008DDA] block font-semibold">
                          {trace.latency}
                        </span>
                        <span className="text-[10px] text-[#94A3B8] font-mono">{trace.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payload' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0F2C59]">
                  ISO 20022 Financial Transaction Payload Definition (Node {selectedStep})
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">application/json · UTF-8</span>
              </div>
              <pre className="p-4 rounded-[6px] bg-[#0F2C59] text-[#A0AEC0] font-mono text-xs overflow-x-auto border border-[#1E3A8A] leading-relaxed">
                <code>{currentStep.payloadSample}</code>
              </pre>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0F2C59]">Node Ingress / Egress Throughput Curve</h4>
                  <p className="text-xs text-[#64748B]">Real-time message transactions per second (RPS)</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#008DDA]" />
                    <span>Ingress RPS</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                    <span>Settled RPS</span>
                  </span>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={telemetryData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="ingressGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#008DDA" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#008DDA" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="settledGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                    <XAxis dataKey="time" stroke="#94A3B8" fontSize={11} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#E2E8F0',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: '#1A1A1A',
                      }}
                    />
                    <Area type="monotone" dataKey="ingress" stroke="#008DDA" strokeWidth={2} fillOpacity={1} fill="url(#ingressGrad)" />
                    <Area type="monotone" dataKey="egress" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#settledGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default BankingProcessStudio
