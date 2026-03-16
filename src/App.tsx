/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Plane, 
  TrendingUp, 
  Globe, 
  Building2, 
  ArrowUpRight, 
  Info,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  accentColor: string;
  sideContent?: React.ReactNode;
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: Slide[] = [
    {
      id: 'intro',
      title: 'Airport Investment',
      subtitle: 'Present vs. Future: A Strategic Dissection',
      accentColor: 'from-blue-600 to-indigo-600',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-light leading-relaxed text-zinc-400">
            A classic debate of <span className="text-white font-medium">"Immediate Utility"</span> vs. <span className="text-white font-medium">"Long-term Strategic Infrastructure."</span>
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              The J-Curve Effect
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Initial investments often look like waste, but they precede the exponential growth phase. Infrastructure must lead demand, not follow it.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="flex-1 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1">The Doubt</p>
              <p className="text-sm text-zinc-300">"Ghost airports" with 1 flight a day are a waste of public money.</p>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">The Vision</p>
              <p className="text-sm text-zinc-300">Strategic lead time for a $30 trillion economy by 2047.</p>
            </div>
          </div>
        </div>
      ),
      sideContent: (
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-50" />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Plane className="w-48 h-48 text-blue-500/40 rotate-[-15deg]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      )
    },
    {
      id: 'ghost-reality',
      title: 'The "Ghost Airport" Reality',
      subtitle: 'Acknowledging the Current Underutilization',
      accentColor: 'from-red-600 to-orange-600',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl font-bold text-red-500 mb-2">1 in 5</p>
              <p className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Domestic Airports</p>
              <p className="mt-4 text-zinc-300">Recorded 2 or fewer flights per day as of late 2025.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl font-bold text-orange-500 mb-2">Zero</p>
              <p className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Movement Hubs</p>
              <p className="mt-4 text-zinc-300">Facilities like Tezpur and Azamgarh saw minimal activity in 2025.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              The P&L Perspective
            </h4>
            <p className="text-zinc-400">
              From a purely current-year perspective, maintenance expenses exceed revenue. These are seen as "sunk costs" by critics.
            </p>
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex flex-col justify-center p-12 space-y-8">
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-red-500"
              />
            </div>
            <p className="text-xs text-zinc-500 uppercase font-bold">Underutilized Capacity (2025)</p>
          </div>
          <p className="text-6xl font-display font-bold text-white/10 leading-none">
            SUNK<br />COSTS?
          </p>
        </div>
      )
    },
    {
      id: 'strategic-lead',
      title: 'The Strategic Lead',
      subtitle: 'Infrastructure Precedes Demand',
      accentColor: 'from-emerald-600 to-teal-600',
      content: (
        <div className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-zinc-300 leading-relaxed">
              Building an airport takes <span className="text-emerald-400 font-bold">5–8 years</span>. If you wait for the traffic jam to build the road, you've already lost.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Land Acquisition</h4>
                <p className="text-sm text-zinc-400">Buying land at 2026 prices vs. 2030 prices (where costs often triple).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">The China Model</h4>
                <p className="text-sm text-zinc-400">China was criticized for "ghost cities" in 2010. Today, they are global manufacturing backbones.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex flex-col justify-center p-12">
          <div className="relative">
            <div className="text-[12rem] font-display font-black text-white/5 leading-none absolute -top-20 -left-10 select-none">
              2047
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-500 font-bold">Vision 2047</p>
              <h2 className="text-5xl font-display font-bold leading-tight">
                $30 Trillion<br />Economy
              </h2>
              <p className="text-zinc-500 max-w-xs">
                NITI Aayog emphasizes decentralized aviation as a core pillar for high-income status.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multiplier',
      title: 'The Multiplier Effect',
      subtitle: 'Scientific Economic Decisions, Not Vanity',
      accentColor: 'from-purple-600 to-pink-600',
      content: (
        <div className="space-y-8">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-purple-400 font-bold mb-4">Economic Multiplier (ICAO/NITI Aayog)</p>
              <div className="flex items-baseline gap-4">
                <span className="text-7xl font-display font-black text-white">3.1x</span>
                <span className="text-xl text-zinc-400">ROI</span>
              </div>
              <p className="mt-6 text-xl text-zinc-300 leading-relaxed">
                For every <span className="text-white font-bold">₹100</span> spent on air transport, <span className="text-white font-bold">₹310</span> is generated in the local economy.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <TrendingUp className="w-64 h-64" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['Tourism', 'Logistics', 'Secondary Jobs'].map((item) => (
              <div key={item} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-sm font-bold text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex items-center justify-center p-12">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-xs uppercase text-zinc-500 mb-2">Growth Rate</p>
              <p className="text-3xl font-bold text-purple-400">10.5%</p>
              <p className="text-[10px] text-zinc-600 mt-1">India (2026 Forecast)</p>
            </div>
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-xs uppercase text-zinc-500 mb-2">Growth Rate</p>
              <p className="text-3xl font-bold text-zinc-500">8.9%</p>
              <p className="text-[10px] text-zinc-600 mt-1">China (2026 Forecast)</p>
            </div>
            <div className="col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-zinc-400 italic">"India is set to surpass China in air passenger traffic growth rate by 2026." — ACI Report</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rail-vs-air',
      title: 'Rail vs. Air',
      subtitle: 'The "Time-Value of Money" Shift',
      accentColor: 'from-amber-600 to-yellow-600',
      content: (
        <div className="space-y-6">
          <p className="text-xl text-zinc-400 italic">
            "Nobody travels by air, they prefer trains."
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500 uppercase font-bold">Single Month Record</p>
                <p className="text-3xl font-bold text-amber-500">102,319</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-600">March 2025</p>
                <p className="text-sm text-zinc-400">Domestic Flights</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500 uppercase font-bold">Regional Passengers</p>
                <p className="text-3xl font-bold text-amber-500">1.6 Crore+</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-600">UDAN Scheme</p>
                <p className="text-sm text-zinc-400">Cumulative 2025</p>
              </div>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            For the expanding middle class, a <span className="text-white font-bold">₹3,000 flight</span> that saves <span className="text-white font-bold">24 hours</span> is an investment, not a luxury.
          </p>
        </div>
      ),
      sideContent: (
        <div className="h-full flex flex-col justify-center p-12 space-y-6">
          <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20">
            <h4 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 w-6" />
              7-10% Annual Growth
            </h4>
            <p className="text-zinc-400">
              ICRA (2026) projects sustained growth as air travel transitions from luxury to mass-utility.
            </p>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs uppercase tracking-widest font-bold">Mass Utility Shift</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
        </div>
      )
    },
    {
      id: 'global-validation',
      title: 'Global Validation',
      subtitle: 'What the "Smart Money" is Saying',
      accentColor: 'from-cyan-600 to-blue-600',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-cyan-400">Morgan Stanley</h4>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">JAN 2026</span>
              </div>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                "India's Capex Run resembles the high-growth period of 2003-2007. Infra investment to hit 6.5% of GDP."
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-blue-400">World Bank</h4>
                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">MAR 2025</span>
              </div>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                "Structural transformation through infrastructure is the #1 requirement for High-Income status by 2047."
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-indigo-400">IATA</h4>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full">DEC 2025</span>
              </div>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                "India to remain the world's fastest-growing domestic aviation market through 2026."
              </p>
            </div>
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex items-center justify-center p-12">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full"
            />
            <div className="text-center space-y-2">
              <Globe className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
              <p className="text-2xl font-display font-bold">Global Confidence</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Anti-Corruption Evidence</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ghost-to-gold',
      title: 'Ghost to Gold',
      subtitle: 'Real Success Stories from the Ground',
      accentColor: 'from-emerald-600 to-yellow-600',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Darbhanga (Bihar)</h4>
                <p className="text-sm text-zinc-400 mt-1">
                  From "token project" to <span className="text-emerald-400">3 million footfalls</span>. Now getting a Cargo Hub for local exports like Makhana.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Jharsuguda (Odisha)</h4>
                <p className="text-sm text-zinc-400 mt-1">
                  WWII strip turned powerhouse. <span className="text-blue-400">100% load factors</span> to Hyderabad. Essential for steel & power industries.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Prayagraj (UP)</h4>
                <p className="text-sm text-zinc-400 mt-1">
                  Handled <span className="text-amber-400">5.8 lakh passengers</span> during Mahakumbh 2026 alone. Proved "surge capacity" value.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex flex-col justify-center p-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 opacity-20" />
            </div>
            <p className="text-4xl font-display font-bold mb-4">Calculated Economic Warfare</p>
            <p className="text-zinc-500 leading-relaxed">
              These airports proved that people weren't "preferring trains"—they simply had no other choice until the airport existed.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'summary',
      title: 'The Verdict',
      subtitle: 'Waste or Wisdom?',
      accentColor: 'from-zinc-700 to-zinc-900',
      content: (
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/10 text-zinc-300 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Argument</th>
                  <th className="px-6 py-4">The "Doubt"</th>
                  <th className="px-6 py-4">The Reality (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-400">
                <tr>
                  <td className="px-6 py-4 font-bold text-zinc-200">Utilization</td>
                  <td className="px-6 py-4">"Only 1 flight is a waste."</td>
                  <td className="px-6 py-4 text-emerald-400">1 flight = "Investable" city.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-zinc-200">Cost</td>
                  <td className="px-6 py-4">"Sunk public money."</td>
                  <td className="px-6 py-4 text-emerald-400">3.1x Multiplier effect.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-zinc-200">Strategy</td>
                  <td className="px-6 py-4">"Build when needed."</td>
                  <td className="px-6 py-4 text-emerald-400">Land costs triple by 2030.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-lg text-zinc-300 italic text-center">
              "Infrastructure isn't a reaction to growth; it's the permission for growth to happen."
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IBEF Report', url: '#' },
              { name: 'World Bank Memo', url: '#' },
              { name: 'Morgan Stanley Outlook', url: '#' },
              { name: 'PIB UDAN Release', url: '#' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:bg-white/10 hover:text-white transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      ),
      sideContent: (
        <div className="h-full flex flex-col justify-center p-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-display font-bold">Planting the Forest</h2>
            <p className="text-zinc-500 max-w-xs mx-auto">
              Building an airport today is like planting a tree. You don't get the fruit tomorrow, but without the tree, you'll never have the fruit.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] font-sans selection:bg-blue-500/30">
      {/* Top Progress Bar */}
      <div className="h-1 w-full bg-white/5 flex">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className={cn(
              "h-full transition-all duration-500 flex-1",
              idx <= currentSlide ? "bg-white/40" : "bg-transparent",
              idx === currentSlide && "bg-white"
            )}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="absolute inset-0 flex"
          >
            {/* Left Side: Content */}
            <div className="w-1/2 h-full flex flex-col p-16 lg:p-24 justify-center relative z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className={cn("inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-gradient-to-r text-white", slide.accentColor)}>
                  Slide {currentSlide + 1} of {slides.length}
                </div>
                <h1 className="text-6xl font-display font-bold tracking-tight mb-4 leading-[1.1]">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-xl font-serif italic text-zinc-500 mb-12">
                    {slide.subtitle}
                  </p>
                )}
                <div className="max-w-xl">
                  {slide.content}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Visual/Accent */}
            <div className="w-1/2 h-full bg-white/[0.02] border-l border-white/5 relative">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-full"
              >
                {slide.sideContent}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="h-24 px-12 flex items-center justify-between border-t border-white/5 bg-black/50 backdrop-blur-xl relative z-20">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Project</span>
            <span className="text-sm font-display font-semibold text-zinc-300">Viksit Bharat: Aviation Vision</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Author</span>
            <span className="text-sm font-display font-semibold text-zinc-300">Gemini Insights</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-sm font-mono text-zinc-500">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </footer>

      {/* Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
