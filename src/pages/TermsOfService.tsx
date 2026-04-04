export default function TermsOfService() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0a2744] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-heading text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl leading-tight">
            Terms of Service
          </h1>
          <p className="text-white/60 text-base mt-6">
            Version 2.1 · Effective: 09 March 2026 · ABN 60 640 710 845
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C] mt-20" />
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[#333333]">

            <div className="bg-[#f5f5f5] border-l-4 border-[#C9A84C] p-6 text-sm text-[#555555] leading-relaxed">
              These Terms of Service have been prepared in accordance with the Competition and Consumer Act 2010 (Cth), the Australian Consumer Law (ACL), and the Unfair Contract Terms regime (as amended 9 November 2023). Nothing in these Terms excludes rights that cannot be lawfully excluded under Australian law.
            </div>

            <TosSection title="1. Introduction and Parties">
              <p>These Terms of Service ("Terms") govern the relationship between Stubbs Capital Pty Ltd (ABN: 60 640 710 845) trading as Keystone Facility Services ("Keystone", "we", "us", "our") and the individual or entity engaging our services ("Client", "you").</p>
              <p>By requesting a quote, accepting a proposal, signing a Service Agreement, or otherwise engaging Keystone, you confirm that you have read, understood, and agree to be bound by these Terms.</p>
              <p>These Terms apply to all commercial cleaning and facility management services provided by Keystone, including services managed through the Keystone platform.</p>
            </TosSection>

            <TosSection title="2. Application and Hierarchy of Documents">
              <p>These Terms apply in conjunction with any quote or proposal issued by Keystone, any Service Agreement or contract signed by both parties, any scope of works or service schedule, and any electronic communications confirming service details.</p>
              <p>In the event of any inconsistency between these Terms and a specific signed Service Agreement or accepted proposal, the Service Agreement or accepted proposal will prevail to the extent of the inconsistency.</p>
            </TosSection>

            <TosSection title="3. Scope of Services">
              <p>Keystone agrees to provide cleaning and facility management services as specified in the accepted quote, proposal, or Service Agreement applicable to each engagement. Services will be performed with due care and skill as required under the Australian Consumer Law, within the agreed timeframe, and using materials and methods fit for the purpose described.</p>
              <p>Any variation to the agreed scope of services must be confirmed in writing by both parties prior to the work being carried out.</p>
            </TosSection>

            <TosSection title="4. Quotes and Pricing">
              <p>All quotes issued by Keystone are valid for 30 days from the date of issue, unless otherwise stated. Quotes are estimates based on information provided by the Client at the time of request.</p>
              <p>Final pricing may be subject to adjustment if the actual scope of work differs materially from what was described at the time of quoting, if site conditions differ materially from what was represented, or if additional services are requested by the Client. Where pricing adjustments are required, Keystone will notify the Client in advance and seek written agreement before proceeding.</p>
            </TosSection>

            <TosSection title="5. Payment Terms">
              <p>Payment is due as specified in the applicable invoice or Service Agreement. Unless otherwise agreed in writing, invoices are payable within 14 days of the invoice date, and GST (where applicable) will be shown separately on all invoices.</p>
              <p>Keystone reserves the right to charge interest on overdue amounts at the rate of 1.5% per month (calculated on a simple basis), or the maximum rate permitted by law, whichever is lower. Keystone may also suspend services if invoices remain unpaid beyond 30 days, with reasonable written notice provided to the Client.</p>
            </TosSection>

            <TosSection title="6. Client Obligations">
              <p>To enable Keystone to deliver services effectively, the Client agrees to provide accurate and complete information relevant to the services required, ensure safe and timely access to the premises at the agreed service times, notify Keystone promptly of any hazards or special requirements at the site, and not interfere with or obstruct Keystone's staff in the performance of services.</p>
              <p>Keystone is not responsible for errors, omissions, or delays arising from inaccurate or incomplete information provided by the Client.</p>
            </TosSection>

            <TosSection title="7. Cancellation and Rescheduling">
              <p>Our cancellation terms are as follows:</p>
              <ul>
                <li><strong>More than 48 hours before a scheduled service:</strong> no charge</li>
                <li><strong>Between 24 and 48 hours before a scheduled service:</strong> 50% of the scheduled visit value</li>
                <li><strong>Less than 24 hours before a scheduled service, or where access is not provided:</strong> 100% of the scheduled visit value</li>
              </ul>
              <p>These fees reflect the labour costs committed by Keystone in preparing for the scheduled service. Keystone will make reasonable efforts to reschedule services at a time convenient to the Client where advance notice has been provided.</p>
            </TosSection>

            <TosSection title="8. Consumer Guarantees Under Australian Consumer Law">
              <p>Nothing in these Terms limits, excludes, or modifies any right or guarantee that cannot be excluded under the Australian Consumer Law (ACL) or any other applicable Australian law.</p>
              <p>Under the ACL, Clients are entitled to expect that services will be supplied with due care and skill, fit for the purpose for which they were acquired, and delivered within a reasonable time. If Keystone fails to meet these guarantees, Clients may be entitled to a remedy, which may include a re-clean, refund, or compensation, depending on the nature and extent of the failure.</p>
            </TosSection>

            <TosSection title="9. Complaints and Re-Cleans Policy">
              <p>If you are not satisfied with a service performed by Keystone, please notify us within 48 hours of the service being completed. We will investigate your concern and, where valid, arrange a re-clean or other appropriate remedy at no additional charge.</p>
              <p>To submit a complaint, contact us at:</p>
              <ul>
                <li>Email: <a href="mailto:tyler.stubbs@keystonefacilityservices.com.au" className="text-[#C9A84C] hover:underline">tyler.stubbs@keystonefacilityservices.com.au</a></li>
                <li>Phone: <a href="tel:0430789756" className="text-[#C9A84C] hover:underline">0430 789 756</a></li>
              </ul>
              <p>We aim to acknowledge complaints within 2 business days and resolve them within 10 business days.</p>
            </TosSection>

            <TosSection title="10. Limitation of Liability">
              <p>To the maximum extent permitted by law, and subject to the Consumer Guarantees and Complaints clauses above:</p>
              <ul>
                <li>Keystone is not liable for any indirect, incidental, or consequential loss, including loss of profit, revenue, business opportunity, goodwill, or data arising from our services</li>
                <li>Keystone's total liability for any claim arising from a specific engagement is limited to the total amount paid by the Client for that engagement</li>
              </ul>
              <p>These limitations do not apply to personal injury or death caused by Keystone's negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded under the ACL.</p>
            </TosSection>

            <TosSection title="11. Insurance">
              <p>Keystone holds public liability insurance appropriate to the nature and scale of services provided. Insurance is maintained with QBE Insurance. Clients may request a Certificate of Currency by contacting us.</p>
            </TosSection>

            <TosSection title="12. Damage and Property">
              <p>Keystone takes care in the performance of all services. If Keystone causes damage to your property during the course of providing services, please notify us within 48 hours. Keystone will investigate all damage claims in good faith. We are not responsible for pre-existing damage, damage resulting from Client-provided materials or instructions, or damage to fragile items where Keystone was not made aware of the risk.</p>
            </TosSection>

            <TosSection title="13. Use of Internal Systems and Digital Tools">
              <p>By engaging Keystone, you acknowledge that your information may be stored and processed within our internal platform in accordance with our Privacy Policy, that digital platforms and electronic communications may be used to deliver services, and that electronic documents and acceptance records are valid and legally binding.</p>
            </TosSection>

            <TosSection title="14. Data Handling and Privacy">
              <p>Personal information is collected, used, stored, and disclosed in accordance with Keystone's Privacy Policy, which forms part of our engagement with Clients. A copy of our Privacy Policy is available at <a href="/privacy-policy" className="text-[#C9A84C] hover:underline">keystonefacilityservices.com.au/privacy-policy</a>.</p>
            </TosSection>

            <TosSection title="15. Subcontracting">
              <p>Keystone may engage subcontractors to assist in delivering services. All subcontractors engaged by Keystone meet appropriate standards of competence, insurance, and conduct. Keystone remains responsible to the Client for the quality of services delivered by subcontractors engaged on our behalf.</p>
            </TosSection>

            <TosSection title="16. Force Majeure">
              <p>Keystone is not liable for any delay or failure to perform its obligations where that delay or failure is caused by circumstances beyond our reasonable control, including natural disasters, government-imposed restrictions, equipment failure that could not reasonably have been anticipated, pandemic or public health emergencies, or industrial action not involving Keystone's employees.</p>
            </TosSection>

            <TosSection title="17. Termination and Suspension">
              <p>Either party may terminate an ongoing service arrangement by providing written notice in accordance with the applicable Service Agreement. Where no notice period is specified, reasonable written notice of not less than 14 days applies.</p>
              <p>Keystone may suspend or terminate services with immediate effect where the Client has materially breached these Terms and has not remedied the breach within 7 days of written notice, payment obligations are not met and remain unpaid after written notice, or continued service would create an unsafe working environment for Keystone staff.</p>
            </TosSection>

            <TosSection title="18. Electronic Agreements and Communications">
              <p>Keystone may deliver quotes, invoices, agreements, and notices via electronic means. You agree that electronic documents sent by Keystone are valid and legally binding, and that acceptance of a quote or proposal via email, digital signature, or platform confirmation constitutes a binding agreement. Electronic records are admissible as evidence of agreement in accordance with Queensland's Electronic Transactions Act 2001.</p>
            </TosSection>

            <TosSection title="19. Governing Law and Dispute Resolution">
              <p>These Terms are governed by the laws of Queensland, Australia. Both parties agree to submit to the non-exclusive jurisdiction of the courts of Queensland.</p>
              <p>Before commencing legal proceedings, both parties agree to attempt to resolve any dispute in good faith. Written notice of the dispute is to be provided to the other party, both parties meet within 10 business days to attempt resolution, and if unresolved within 30 days, either party may pursue formal legal proceedings or alternative dispute resolution.</p>
            </TosSection>

            <TosSection title="20. Updates to These Terms">
              <p>Keystone may update these Terms from time to time to reflect changes in our business, services, or legal obligations. For existing ongoing Service Agreements, material changes will be communicated with reasonable notice. Continued engagement after the notice period constitutes acceptance of the updated Terms, unless written objection is provided.</p>
            </TosSection>

            <TosSection title="21. Contact Details">
              <div className="bg-[#f5f5f5] p-6 mt-4">
                <p className="font-heading font-semibold text-[#0a2744] mb-1">Keystone Facility Services</p>
                <p className="text-sm text-[#555555]">ABN: 60 640 710 845</p>
                <p className="text-sm text-[#555555] mt-2">
                  Email: <a href="mailto:tyler.stubbs@keystonefacilityservices.com.au" className="text-[#C9A84C] hover:underline">tyler.stubbs@keystonefacilityservices.com.au</a>
                </p>
                <p className="text-sm text-[#555555]">
                  Phone: <a href="tel:0430789756" className="text-[#C9A84C] hover:underline">0430 789 756</a>
                </p>
                <p className="text-sm text-[#555555]">
                  Privacy Policy: <a href="/privacy-policy" className="text-[#C9A84C] hover:underline">keystonefacilityservices.com.au/privacy-policy</a>
                </p>
              </div>
            </TosSection>

            <div className="border-t border-[#dddddd] pt-8 text-xs text-[#aaaaaa] leading-relaxed">
              <p>These Terms of Service have been prepared to align with the Competition and Consumer Act 2010 (Cth), the Australian Consumer Law, and Queensland law as of March 2026. They do not constitute legal advice. Keystone Facility Services (Stubbs Capital Pty Ltd ABN: 60 640 710 845) recommends obtaining independent legal advice if you have specific compliance concerns. Last reviewed: March 2026.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

function TosSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-heading font-bold text-xl text-[#0a2744] border-b border-[#dddddd] pb-3">
        {title}
      </h2>
      <div className="space-y-4 text-[#555555] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#C9A84C] [&_a:hover]:underline [&_strong]:text-[#333333] [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  )
}
