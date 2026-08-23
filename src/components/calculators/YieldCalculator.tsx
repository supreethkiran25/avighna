import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { TrendingUp, Flame, Milk, ArrowRight } from 'lucide-react';

interface YieldCalculatorProps {
  onRequestSample?: (productName: string) => void;
}

export const YieldCalculator: React.FC<YieldCalculatorProps> = ({ onRequestSample }) => {
  const [activeTab, setActiveTab] = useState<'xtendra' | 'ezential'>('xtendra');

  // Xtendra 06 State
  const [oilLitersDaily, setOilLitersDaily] = useState<number>(100);
  const [oilPricePerLiter, setOilPricePerLiter] = useState<number>(135);
  const [operatingDays, setOperatingDays] = useState<number>(26);

  // Ezential 4001 State
  const [milkLitersDaily, setMilkLitersDaily] = useState<number>(1000);
  const [paneerPricePerKg, setPaneerPricePerKg] = useState<number>(360);

  // Xtendra Calculations
  const dailyOilSavedLiters = (oilLitersDaily * 0.10);
  const monthlyOilSavedLiters = Math.round(dailyOilSavedLiters * operatingDays);
  const monthlyFinancialSavings = Math.round(monthlyOilSavedLiters * oilPricePerLiter);
  const dailyXtendraRequiredGrams = oilLitersDaily * 1.0; // 1 gm per 1 kg oil

  // Ezential 4001 Calculations
  const baseDailyPaneerKg = milkLitersDaily * 0.18;
  const extraDailyPaneerKg = Math.round(baseDailyPaneerKg * 0.19 * 10) / 10;
  const extraMonthlyPaneerKg = Math.round(extraDailyPaneerKg * operatingDays);
  const extraMonthlyRevenue = Math.round(extraMonthlyPaneerKg * paneerPricePerKg);
  const ezentialDosageDailyKg = (milkLitersDaily * 0.0035).toFixed(2); // 0.35%

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-[#0F1216] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle AI Molecular Atmosphere Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/assets/ai_molecular_backdrop.jpg')` }}
      />

      <div className="container-editorial relative z-10">
        <SectionHeader
          label="Process Engineering // Yield & Savings Simulator"
          title="Calculate Your Production Gain."
          kannadaSubtitle="ತೈಲ ಉಳಿತಾಯ ಮತ್ತು ಪನೀರ್ ಇಳುವರಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್"
          description="Interactive formulation metrics based on verified technical trials for Xtendra 06 antioxidant oil extenders and EZENTIAL 4001 paneer coagulants."
        />

        {/* Tab Selector */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex p-1 bg-[#08090A] border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab('xtendra')}
              className={`px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'xtendra'
                  ? 'bg-[#E0581E] text-[#08090A] shadow-md'
                  : 'text-[#F9F8F5]/70 hover:text-[#F9F8F5]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Xtendra 06 Frying Oil Savings</span>
            </button>

            <button
              onClick={() => setActiveTab('ezential')}
              className={`px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ezential'
                  ? 'bg-[#C88E3E] text-[#08090A] shadow-md'
                  : 'text-[#F9F8F5]/70 hover:text-[#F9F8F5]'
              }`}
            >
              <Milk className="w-3.5 h-3.5" />
              <span>EZENTIAL 4001 Paneer Yield</span>
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Box (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#08090A]/95 backdrop-blur-sm border border-white/[0.08] flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E]">
                  {activeTab === 'xtendra' ? '// Frying Line Parameters' : '// Dairy Batch Parameters'}
                </span>
                <span className="font-mono text-xs text-[#A3A6AD]">
                  Dosage: {activeTab === 'xtendra' ? '1 gm / 1 kg oil' : '0.35% (3.5g / 1kg)'}
                </span>
              </div>

              {activeTab === 'xtendra' ? (
                /* Xtendra Form */
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Daily Cooking Oil Consumption: <strong className="text-[#E0581E]">{oilLitersDaily} Liters</strong>
                    </label>
                    <input
                      type="range"
                      min="25"
                      max="1000"
                      step="25"
                      value={oilLitersDaily}
                      onChange={(e) => setOilLitersDaily(Number(e.target.value))}
                      className="w-full accent-[#E0581E] bg-[#15191F] h-2 rounded cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#A3A6AD] mt-1">
                      <span>25L</span>
                      <span>100L (Standard Batch)</span>
                      <span>500L</span>
                      <span>1000L</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Cooking Oil Cost per Liter: <strong className="text-[#E5B25D]">₹{oilPricePerLiter}</strong>
                    </label>
                    <input
                      type="number"
                      min="80"
                      max="300"
                      value={oilPricePerLiter}
                      onChange={(e) => setOilPricePerLiter(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#15191F] border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Operating Days per Month: <strong className="text-[#F9F8F5]">{operatingDays} Days</strong>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="30"
                      value={operatingDays}
                      onChange={(e) => setOperatingDays(Number(e.target.value))}
                      className="w-full accent-[#E0581E] bg-[#15191F] h-2 rounded cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                /* Ezential Form */
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Daily Milk Volume Processed: <strong className="text-[#C88E3E]">{milkLitersDaily} Liters</strong>
                    </label>
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="200"
                      value={milkLitersDaily}
                      onChange={(e) => setMilkLitersDaily(Number(e.target.value))}
                      className="w-full accent-[#C88E3E] bg-[#15191F] h-2 rounded cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#A3A6AD] mt-1">
                      <span>200L</span>
                      <span>1,000L</span>
                      <span>5,000L</span>
                      <span>10,000L</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Wholesale/Selling Price of Paneer per kg: <strong className="text-[#E5B25D]">₹{paneerPricePerKg}</strong>
                    </label>
                    <input
                      type="number"
                      min="200"
                      max="600"
                      value={paneerPricePerKg}
                      onChange={(e) => setPaneerPricePerKg(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#15191F] border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#C88E3E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F9F8F5]/80 mb-2">
                      Operating Days per Month: <strong className="text-[#F9F8F5]">{operatingDays} Days</strong>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="30"
                      value={operatingDays}
                      onChange={(e) => setOperatingDays(Number(e.target.value))}
                      className="w-full accent-[#C88E3E] bg-[#15191F] h-2 rounded cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-[#15191F] border border-white/[0.06] text-[11px] font-mono text-[#A3A6AD]">
              Trial verification protocol: Formulations benchmarked across commercial South Indian processing units.
            </div>
          </div>

          {/* Right Results & Impact Dashboard (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#08090A]/95 backdrop-blur-sm border border-white/[0.08] flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D]">
                  // Projected Financial & Yield Output
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#E0581E]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Direct Bottomline Impact</span>
                </span>
              </div>

              {activeTab === 'xtendra' ? (
                <div className="mt-6 space-y-6">
                  {/* Big Number Monthly Savings */}
                  <div className="p-5 bg-[#15191F] border border-[#E0581E]/30 space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#A3A6AD]">
                      Estimated Monthly Oil Cost Saved
                    </span>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-[#E5B25D]">
                      ₹{monthlyFinancialSavings.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-[#A3A6AD] font-sans">
                      Equivalent to <strong className="text-[#F9F8F5]">{monthlyOilSavedLiters.toLocaleString('en-IN')} Liters</strong> of cooking oil saved monthly.
                    </p>
                  </div>

                  {/* Operational Ledger Grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Daily Oil Saved</span>
                      <span className="text-lg font-bold text-[#F9F8F5] mt-1 block">
                        {dailyOilSavedLiters.toFixed(1)} L / day
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Daily Xtendra Dosage</span>
                      <span className="text-lg font-bold text-[#E0581E] mt-1 block">
                        {dailyXtendraRequiredGrams} grams
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Oil Absorption Drop</span>
                      <span className="text-lg font-bold text-[#E5B25D] mt-1 block">
                        -10% to -15%
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Packaging Options</span>
                      <span className="text-sm font-bold text-[#F9F8F5] mt-1 block">
                        1L | 5L | 25L Cans
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-6">
                  {/* Big Number Extra Revenue */}
                  <div className="p-5 bg-[#15191F] border border-[#C88E3E]/30 space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#A3A6AD]">
                      Estimated Monthly Revenue Increase
                    </span>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-[#E5B25D]">
                      ₹{extraMonthlyRevenue.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-[#A3A6AD] font-sans">
                      Yields an extra <strong className="text-[#F9F8F5]">{extraMonthlyPaneerKg.toLocaleString('en-IN')} kg</strong> of finished paneer every month.
                    </p>
                  </div>

                  {/* Operational Ledger Grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Daily Extra Paneer</span>
                      <span className="text-lg font-bold text-[#F9F8F5] mt-1 block">
                        +{extraDailyPaneerKg} kg / day
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">EZENTIAL Dosage</span>
                      <span className="text-lg font-bold text-[#C88E3E] mt-1 block">
                        {ezentialDosageDailyKg} kg / day
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Yield Surge</span>
                      <span className="text-lg font-bold text-[#E5B25D] mt-1 block">
                        +18% to +20%
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0F1216] border border-white/[0.06]">
                      <span className="text-[#A3A6AD] text-[10px] uppercase block">Texture Quality</span>
                      <span className="text-sm font-bold text-[#F9F8F5] mt-1 block">
                        Soft & Elastic Sponge
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  if (onRequestSample) {
                    onRequestSample(activeTab === 'xtendra' ? 'Xtendra 06 Oil Extender' : 'EZENTIAL 4001 Paneer Coagulant');
                  }
                }}
                className="w-full py-3 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Trial Sample For {activeTab === 'xtendra' ? 'Xtendra 06' : 'EZENTIAL 4001'}</span>
                <ArrowRight className="w-4 h-4 text-[#08090A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldCalculator;
