"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FileBarChart, LayoutDashboard, Truck, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoFrame } from "./DemoFrame";

type PeriodKey = "7d" | "30d" | "12m";

// Valores em milhares de reais — dados totalmente fictícios, só para ilustrar a interface.
const PERIODS: Record<
  PeriodKey,
  { label: string; buckets: string[]; revenue: number[]; expenses: number[]; open: number; delta: string }
> = {
  "7d": {
    label: "7 dias",
    buckets: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    revenue: [4.2, 5.1, 3.8, 6.0, 5.5, 7.2, 4.9],
    expenses: [2.1, 2.4, 2.0, 2.9, 2.6, 3.1, 2.3],
    open: 18,
    delta: "+6,2%",
  },
  "30d": {
    label: "30 dias",
    buckets: ["1–5", "6–10", "11–15", "16–20", "21–25", "26–30"],
    revenue: [24, 28, 22, 31, 29, 35],
    expenses: [12, 13, 11, 15, 14, 16],
    open: 47,
    delta: "+9,8%",
  },
  "12m": {
    label: "12 meses",
    buckets: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    revenue: [118, 124, 131, 127, 140, 152, 149, 158, 163, 171, 168, 182],
    expenses: [71, 73, 76, 74, 80, 86, 84, 89, 92, 95, 93, 99],
    open: 63,
    delta: "+14,1%",
  },
};

const TRANSACTIONS = [
  { id: "#1042", who: "Cliente Exemplo A", value: "R$ 1.280,00", status: "Pago" },
  { id: "#1041", who: "Cliente Exemplo B", value: "R$ 760,00", status: "Pendente" },
  { id: "#1040", who: "Fornecedor Exemplo C", value: "R$ 2.150,00", status: "Pago" },
  { id: "#1039", who: "Cliente Exemplo D", value: "R$ 489,90", status: "Em análise" },
];

const NAV = [
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Financeiro", icon: Wallet },
  { label: "Clientes", icon: Users },
  { label: "Fornecedores", icon: Truck },
  { label: "Relatórios", icon: FileBarChart },
];

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);
const brl = (thousands: number) =>
  thousands >= 1000
    ? `R$ ${(thousands / 1000).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mi`
    : `R$ ${thousands.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil`;

const statusStyle: Record<string, string> = {
  Pago: "bg-cyan/10 text-cyan",
  Pendente: "bg-mist/10 text-mist/70",
  "Em análise": "bg-royal/40 text-mist",
};

export function DashboardDemo() {
  const [period, setPeriod] = useState<PeriodKey>("30d");
  const data = PERIODS[period];

  const revenue = sum(data.revenue);
  const expenses = sum(data.expenses);
  const max = Math.max(...data.revenue, ...data.expenses);

  const kpis = [
    { label: "Receita", value: brl(revenue), hint: data.delta },
    { label: "Despesas", value: brl(expenses), hint: "no período" },
    { label: "Resultado", value: brl(revenue - expenses), hint: "receita − despesas" },
    { label: "Pedidos em aberto", value: String(data.open), hint: "aguardando" },
  ];

  return (
    <DemoFrame
      title={<span className="font-medium">Painel de gestão</span>}
      className="bg-navy/90"
    >
      <div className="grid md:grid-cols-[13rem_1fr]">
        <nav
          aria-label="Menu do sistema (ilustrativo)"
          className="hidden border-r border-mist/10 p-4 md:block"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map(({ label, icon: Icon }, i) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-[13px]",
                  i === 0 ? "bg-mist/[0.07] text-mist" : "text-mist/50",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-semibold tracking-tight">Visão geral</p>
            <div
              role="group"
              aria-label="Período"
              className="flex rounded-full border border-mist/10 p-1"
            >
              {(Object.keys(PERIODS) as PeriodKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={key === period}
                  onClick={() => setPeriod(key)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs transition-colors duration-200",
                    key === period ? "bg-cyan text-navy" : "text-mist/60 hover:text-mist",
                  )}
                >
                  {PERIODS[key].label}
                </button>
              ))}
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-mist/10 bg-mist/[0.03] p-4">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-mist/55">{kpi.label}</dt>
                <dd className="mt-2 text-xl font-semibold tracking-tight">{kpi.value}</dd>
                <p className="mt-1 text-[11px] text-mist/55">{kpi.hint}</p>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-xl border border-mist/10 bg-mist/[0.03] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Receitas e despesas</p>
              <div className="flex gap-4 text-[11px] text-mist/50">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-sm bg-cyan" /> Receitas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-sm bg-royal" /> Despesas
                </span>
              </div>
            </div>

            <div
              key={period}
              role="img"
              aria-label={`Gráfico de barras de receitas e despesas, ${data.label} (dados fictícios)`}
              className="flex h-44 items-end gap-2 sm:gap-3"
            >
              {data.buckets.map((bucket, i) => (
                <div key={bucket} className="flex h-full flex-1 flex-col justify-end gap-2">
                  <div className="flex flex-1 items-end justify-center gap-[3px]">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.revenue[i] / max) * 100}%` }}
                      transition={{ duration: 0.7, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-4 rounded-t bg-cyan"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.expenses[i] / max) * 100}%` }}
                      transition={{ duration: 0.7, delay: i * 0.03 + 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-4 rounded-t bg-royal"
                    />
                  </div>
                  <span className="text-center font-mono text-[10px] text-mist/55">{bucket}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] text-left text-[13px]">
              <caption className="sr-only">Últimas movimentações (dados fictícios)</caption>
              <thead>
                <tr className="border-b border-mist/10 text-[11px] uppercase tracking-[0.14em] text-mist/55">
                  <th className="pb-3 font-normal">Código</th>
                  <th className="pb-3 font-normal">Origem</th>
                  <th className="pb-3 font-normal">Valor</th>
                  <th className="pb-3 text-right font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((t) => (
                  <tr key={t.id} className="border-b border-mist/5 last:border-0">
                    <td className="py-3 font-mono text-mist/55">{t.id}</td>
                    <td className="py-3 text-mist/85">{t.who}</td>
                    <td className="py-3 text-mist/85">{t.value}</td>
                    <td className="py-3 text-right">
                      <span className={cn("rounded-full px-2.5 py-1 text-[11px]", statusStyle[t.status])}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}