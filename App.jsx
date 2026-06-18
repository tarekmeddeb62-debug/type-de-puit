import React, { useState } from 'react'
import { CheckCircle, AlertCircle, MapPin, FileText, Globe, ChevronDown, Leaf, Sprout } from 'lucide-react'

const delegationsData = {
  'تطاوين الشمالية': [
    'برورمت', 'تلالت', 'وادي الغار', 'المعونة', 'الزهراء', 
    'قطوفة', 'خاتمة', 'السعادة', 'القلعة الشرقية', 'القلعة الغربية', 'بني بلال'
  ],
  'تطاوين الجنوبية': [
    'المزطورية الجنوبية', 'المزطورية الشمالية', 'غرغار', 'شنني الجديدة', 
    'شنني', 'الدويرات', 'المسرب', 'رأس الوادي', 'بئر الثلاثين', 'بني بركة-تونكت'
  ],
  'معتمدية الصمار': [
    'كرشاو', 'الصمار', 'الغرياني'
  ],
  'معتمدية البئر الاحمر': [
    'البئر الأحمر الشرقية', 'البئر الأحمر الغربية', 'السند', 'العرقوب', 
    'قراقر', 'المدينة', 'البساتين'
  ],
  'معتمدية غمراسن': [
    'غمراسن', 'الواحة', 'الزهور', 'القرضاب', 'الفرش', 'قرماسة', 
    'قصر الحدادة', 'المدينة الجديدة', 'قصر المرابطين', 'وادي الخيل'
  ],
  'معتمدية ذهيبة': [
    'ذهيبة الشرقية', 'ذهيبة الغربية'
  ],
  'معتمدية الرمادة': [
    'رمادة الشرقية', 'رمادة الغربية', 'نكريف', 'كنبوت', 'بئر عمير', 
    'برج الخضراء', 'مغنى'
  ],
  'معتمدية بني مهيرة': [
    'قصر مهيرة', 'بني مهيرة الشرقية', 'قصر عون', 'المرة', 'الرهاش'
  ]
}

const directApplicationDelegations = [
  'السعادة', 'غرغار', 'بني بركة-تونكت', 'كرشاو', 'الصمار', 'الغرياني', 
  'ذهيبة الشرقية', 'ذهيبة الغربية', 'رمادة الشرقية'
]

function App() {
  const [selectedMunicipality, setSelectedMunicipality] = useState('')
  const [selectedDelegation, setSelectedDelegation] = useState('')
  const [result, setResult] = useState(null)

  const handleMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value)
    setSelectedDelegation('')
    setResult(null)
  }

  const handleDelegationChange = (e) => {
    setSelectedDelegation(e.target.value)
    const isDirectApplication = directApplicationDelegations.includes(e.target.value)
    setResult({
      isDirectApplication,
      delegation: e.target.value
    })
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 min-h-screen py-8 px-4 md:py-16">
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
                  <MapPin className="w-14 h-14 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                  فحص طلب نوع البئر الفلاحية
                </h1>
                <p className="text-purple-200 font-bold text-lg md:text-xl">
                 ولاية تطاوين
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 space-y-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50">
              <div>
                <label className="block text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  اختر المعتمدية
                </label>
                <div className="relative">
                  <select
                    value={selectedMunicipality}
                    onChange={handleMunicipalityChange}
                    className="w-full px-5 py-4 border-2 border-purple-500/50 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/30 focus:outline-none transition-all bg-slate-800/80 backdrop-blur-sm text-white appearance-none font-bold cursor-pointer hover:border-purple-400 hover:shadow-lg"
                  >
                    <option value="">-- اختر المعتمدية --</option>
                    {Object.keys(delegationsData).map((municipality) => (
                      <option key={municipality} value={municipality} className="bg-slate-800 text-white">
                        {municipality}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-yellow-400 pointer-events-none" />
                </div>
              </div>

              {selectedMunicipality && (
                <div className="animate-fade-in">
                  <label className="block text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    اختر العمادة
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDelegation}
                      onChange={handleDelegationChange}
                      className="w-full px-5 py-4 border-2 border-purple-500/50 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/30 focus:outline-none transition-all bg-slate-800/80 backdrop-blur-sm text-white appearance-none font-bold cursor-pointer hover:border-purple-400 hover:shadow-lg"
                    >
                      <option value="">-- اختر العمادة --</option>
                      {delegationsData[selectedMunicipality].map((delegation) => (
                        <option key={delegation} value={delegation} className="bg-slate-800 text-white">
                          {delegation}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-yellow-400 pointer-events-none" />
                  </div>
                </div>
              )}

              {result && (
                <div className={`mt-6 p-6 rounded-2xl border-2 animate-slide-up shadow-xl ${
                  result.isDirectApplication 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50' 
                    : 'bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border-orange-500/50'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                      result.isDirectApplication ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-orange-500 to-yellow-500'
                    }`}>
                      {result.isDirectApplication ? (
                        <CheckCircle className="w-7 h-7 text-white" />
                      ) : (
                        <AlertCircle className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-2xl mb-3 ${
                        result.isDirectApplication ? 'text-purple-300' : 'text-orange-300'
                      }`}>
                        {result.delegation}
                      </h3>
                      {result.isDirectApplication ? (
                        <div className="text-white space-y-3">
                          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border-2 border-purple-500/30 shadow-md">
                            <p className="font-bold text-xl mb-3 text-purple-300">تقديم مطلب مباشر</p>
                            <p className="text-base text-purple-200 mb-4 font-medium">
                              يرجى التقدم بطلب الحصول على المنحة عن طريق:
                            </p>
                            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-5 text-center border-2 border-purple-500/30">
                              <p className="font-bold text-purple-200 text-lg leading-relaxed">
                                المندوبية الجهوية للتنمية الفلاحية بتطاوين
                              </p>
                              <p className="text-sm text-purple-300 mt-3 font-medium">
                                مصحوبا بنسخة من بطاقة تعريف وطنية و ملكية العقار و تسوية الوضعية الجبائية
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-white space-y-3">
                          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border-2 border-orange-500/30 shadow-md">
                            <p className="font-bold text-xl mb-3 text-orange-300">التسجيل في المنصة الإلكترونية</p>
                            <p className="text-base text-orange-200 mb-4 font-medium">
                              يرجى التسجيل في المنصة الإلكترونية لوزارة الفلاحة:
                            </p>
                            <a 
                              href="https://DPH.AGRINET.TN"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                            >
                              <Globe className="w-6 h-6" />
                              DPH.AGRINET.TN
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t-2 border-purple-500/30">
                <div className="flex items-center justify-center gap-2 text-purple-200 text-sm font-bold">
                  <FileText className="w-5 h-5 text-yellow-400" />
                  <p>
                   المندوبية الجهوية للتنمية الفلاحية بتطاوين
                  </p>
                </div>
                <p className="text-center text-purple-300 text-sm mt-2 font-semibold">
                  الجمهورية التونسية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
