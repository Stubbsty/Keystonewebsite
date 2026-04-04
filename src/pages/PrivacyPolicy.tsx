export default function PrivacyPolicy() {
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
            Privacy Policy
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
          <div className="prose-container space-y-10 text-[#333333]">

            <div className="bg-[#f5f5f5] border-l-4 border-[#C9A84C] p-6 text-sm text-[#555555] leading-relaxed">
              This Privacy Policy has been prepared in accordance with the Privacy Act 1988 (Cth), the 13 Australian Privacy Principles (APPs), and the Privacy and Other Legislation Amendment Act 2024. Keystone is committed to meeting these standards as a matter of good faith and client trust.
            </div>

            <PolicySection title="1. Introduction">
              <p>Stubbs Capital Pty Ltd (ABN: 60 640 710 845) trading as Keystone Facility Services ("Keystone", "we", "us", "our") is committed to protecting the privacy of individuals whose personal information we collect and handle in the course of providing commercial cleaning and facility management services.</p>
              <p>This Privacy Policy explains how we collect, use, store, disclose, and protect personal information. It applies to clients, prospective clients, and individuals who interact with our business or the Keystone platform.</p>
            </PolicySection>

            <PolicySection title="2. What Personal Information We Collect">
              <p>We collect only the personal information that is reasonably necessary to provide our services. This may include:</p>
              <SubHeading>Contact Information</SubHeading>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
              <SubHeading>Business & Service Information</SubHeading>
              <ul>
                <li>Business or trading name</li>
                <li>Service address or site address</li>
                <li>Service requirements, instructions, and notes</li>
              </ul>
              <SubHeading>Transaction & Agreement Information</SubHeading>
              <ul>
                <li>Quotes and pricing details</li>
                <li>Service contracts and agreements</li>
                <li>Acceptance records (including name, date, and electronic signature where applicable)</li>
              </ul>
              <SubHeading>Communications</SubHeading>
              <ul>
                <li>Emails and messages exchanged with us</li>
                <li>Records of phone calls or meetings where relevant</li>
              </ul>
              <p>We do not collect sensitive information (such as health information, government identifiers, or financial account numbers) in the ordinary course of our business. If such information is ever required, we will seek your explicit consent.</p>
            </PolicySection>

            <PolicySection title="3. How We Collect Personal Information">
              <p>We collect personal information through:</p>
              <ul>
                <li>Direct communication with you (phone, email, or in person)</li>
                <li>Quote requests and service enquiries submitted via our app or website</li>
                <li>Acceptance of quotes and service agreements</li>
                <li>Ongoing service interactions and communications</li>
              </ul>
              <p>Where practicable, we will collect personal information directly from you. If we receive personal information about you from a third party, we will take reasonable steps to notify you as soon as practicable.</p>
            </PolicySection>

            <PolicySection title="4. Why We Collect and Use Personal Information">
              <p>We collect and use personal information for the following primary purposes:</p>
              <ul>
                <li>To prepare, provide, and follow up on quotes and proposals</li>
                <li>To create and manage service agreements and contracts</li>
                <li>To deliver cleaning and facility management services</li>
                <li>To communicate with clients about their services</li>
                <li>To manage scheduling, operations, and service delivery</li>
                <li>To maintain internal records and comply with legal obligations</li>
                <li>To process payments and manage billing (where applicable)</li>
              </ul>
              <p>We will not use your personal information for purposes unrelated to those above without your prior consent, unless required or permitted by law.</p>
            </PolicySection>

            <PolicySection title="5. Use of the Keystone Platform">
              <p>Keystone uses a secure internal application (the "Keystone platform") to manage client contact information, quotes, contracts, service scheduling, and communication records. The platform is used solely for legitimate business operations and is not publicly accessible. Access is restricted to authorised Keystone team members on a need-to-know basis.</p>
              <p>The platform uses automated processes to assist with tasks such as quote generation, contract creation, and service scheduling. These automated outputs are reviewed and managed by Keystone staff.</p>
            </PolicySection>

            <PolicySection title="6. Disclosure of Personal Information">
              <p>We do not sell, rent, or trade personal information.</p>
              <p>We may disclose personal information to trusted third-party service providers where reasonably necessary to operate our business, including:</p>
              <ul>
                <li>Cloud database and hosting providers</li>
                <li>Email and communication platform providers</li>
                <li>Payment processing services (where applicable)</li>
                <li>Software and IT support providers</li>
              </ul>
              <p>These providers are engaged under contractual terms that require them to handle personal information securely and only for the purposes for which it is disclosed.</p>
              <p>We may also disclose personal information where required or authorised by law.</p>
            </PolicySection>

            <PolicySection title="7. Overseas Disclosure of Personal Information">
              <p>Some of our third-party service providers may store or process personal information on servers located outside of Australia. Where this occurs, we take reasonable steps to ensure that those overseas recipients handle information in a manner consistent with the Australian Privacy Principles.</p>
              <p>Countries where our service providers may be located include, but may not be limited to: the United States of America and the Republic of Ireland (in the context of major cloud providers such as Google and Amazon Web Services).</p>
            </PolicySection>

            <PolicySection title="8. Data Security">
              <p>We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification, or disclosure. Our security measures include:</p>
              <ul>
                <li>Use of secure, access-controlled systems with role-based permissions</li>
                <li>Authentication controls for access to the Keystone platform</li>
                <li>Use of reputable third-party infrastructure providers with industry-standard security certifications</li>
                <li>Limiting access to personal information to authorised team members only</li>
              </ul>
              <p>No data transmission or storage system is completely secure. If you have reason to believe that your information has been compromised, please contact us immediately.</p>
            </PolicySection>

            <PolicySection title="9. Access and Correction">
              <p>You have the right to request access to the personal information we hold about you, and to request corrections if that information is inaccurate, out of date, incomplete, irrelevant, or misleading.</p>
              <p>To make a request, please contact us using the details in Section 13. We will respond within a reasonable time (generally within 30 days). We will not charge a fee for making an access or correction request, though we may charge a reasonable fee for providing access if the request involves significant retrieval effort.</p>
            </PolicySection>

            <PolicySection title="10. Direct Marketing">
              <p>We may use your contact details to send you information about our services, promotions, or updates where you would reasonably expect to receive such communications and have not opted out.</p>
              <p>You have the right to opt out of receiving direct marketing communications at any time by contacting us using the details in Section 13, or using the unsubscribe link in any electronic communication we send you.</p>
            </PolicySection>

            <PolicySection title="11. How to Make a Privacy Complaint">
              <p>If you believe we have mishandled your personal information or breached your privacy rights, please contact us in the first instance so we can resolve the matter directly. We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days.</p>
              <p>If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):</p>
              <ul>
                <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">www.oaic.gov.au</a></li>
                <li>Phone: 1300 363 992</li>
                <li>Post: GPO Box 5218, Sydney NSW 2001</li>
              </ul>
            </PolicySection>

            <PolicySection title="12. Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. The current version is always available at <a href="/privacy-policy" className="text-[#C9A84C] hover:underline">keystonefacilityservices.com.au/privacy-policy</a> and will display an updated Effective Date.</p>
            </PolicySection>

            <PolicySection title="13. Contact Us">
              <p>For any questions, access or correction requests, opt-out requests, or privacy concerns, please contact:</p>
              <div className="bg-[#f5f5f5] p-6 mt-4">
                <p className="font-heading font-semibold text-[#0a2744] mb-1">Keystone Facility Services</p>
                <p className="text-sm text-[#555555]">ABN: 60 640 710 845</p>
                <p className="text-sm text-[#555555] mt-2">
                  Email: <a href="mailto:tyler.stubbs@keystonefacilityservices.com.au" className="text-[#C9A84C] hover:underline">tyler.stubbs@keystonefacilityservices.com.au</a>
                </p>
                <p className="text-sm text-[#555555]">
                  Phone: <a href="tel:0430789756" className="text-[#C9A84C] hover:underline">0430 789 756</a>
                </p>
              </div>
            </PolicySection>

            <div className="border-t border-[#dddddd] pt-8 text-xs text-[#aaaaaa] leading-relaxed">
              <p>This Privacy Policy has been prepared to align with the Privacy Act 1988 (Cth), the Australian Privacy Principles, and the Privacy and Other Legislation Amendment Act 2024. It does not constitute legal advice. Keystone Facility Services (Stubbs Capital Pty Ltd ABN: 60 640 710 845) recommends obtaining independent legal advice if you have specific compliance concerns. Last reviewed: March 2026.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-heading font-bold text-xl text-[#0a2744] border-b border-[#dddddd] pb-3">
        {title}
      </h2>
      <div className="space-y-4 text-[#555555] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#C9A84C] [&_a:hover]:underline">
        {children}
      </div>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading font-semibold text-[#0a2744] text-sm mt-4 mb-2">{children}</p>
  )
}
