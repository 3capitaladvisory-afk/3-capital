'use client';

import { useTranslations } from 'next-intl';

export default function PartnersSection() {
  const t = useTranslations('hiring'); // << هنا مهم يكون 'hiring'

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-12 max-w-[998px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-primary/10 rounded-[40px] py-[10px] px-4 flex items-center">
              <span className="text-primary font-bold text-sm">{t('partners.label')}</span>
            </div>
          </div>

          <h2 className="text-primary text-[32px] lg:text-[42px] font-extrabold leading-[1.2] text-center">
            {t('partners.title')}
          </h2>

          <p className="text-black text-base lg:text-lg font-medium leading-relaxed text-center">
            {t('partners.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-16">
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[220px] rounded-2xl">
            <img
              src="/cropped-tamkeen-co.-logo.png"
              alt={t('partners.label')}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[220px] rounded-2xl">
            <img
              src="/WhatsApp Image 2025-12-31 at 4.14.49 PM.jpeg"
              alt={t('partners.label')}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[220px] rounded-2xl">
            <img
              src="/WhatsApp Image 2025-12-31 at 4.14.49 PM (1).jpeg"
              alt={t('partners.label')}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[220px] rounded-2xl">
            <img
              src="/Golden-solutions.jfif"
              alt={t('partners.label')}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div className="bg-[#F8F8F8] p-6 lg:p-10 flex items-center justify-center h-[200px] lg:h-[220px] rounded-2xl">
            <img
              src="/sisco.png"
              alt={t('partners.label')}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
