import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[800px] px-6 py-10">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </Link>

        <h1 className="mb-2 text-2xl font-semibold">Platnm Terms of Use</h1>
        <p className="mb-10 text-gray-600">Effective Date: January 31, 2026</p>

        <p className="mb-6">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of
          the Platnm mobile application and related services (the
          &quot;Services&quot;). By accessing or using the Services, you agree
          to be bound by these Terms and the Platnm Privacy Policy.
        </p>
        <p className="mb-10">
          If you do not agree to these Terms, you may not use the Services.
        </p>

        <h2 className="mb-3 text-xl font-semibold">1. Use of Services</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            Platnm provides a platform that allows users to share music, receive
            recommendations, and manage a collaborative &quot;Hitlist.&quot;
          </li>
          <li>You must be at least 13 years of age to use the Services.</li>
          <li>
            You agree to use the Services only in compliance with applicable
            laws and these Terms.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">2. User Accounts</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            To access certain features, you must create an account and provide
            accurate information, including your phone number and profile
            details.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities conducted under your
            account.
          </li>
          <li>
            You agree to provide accurate and complete information and to keep
            it updated.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">3. Content and Conduct</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>You retain ownership of any content you submit through the Services.</li>
          <li>
            By submitting content, you grant Platnm a limited, non-exclusive,
            worldwide license to use such content solely for the purpose of
            operating and improving the Services.
          </li>
          <li>
            You agree not to post or transmit content that is unlawful,
            infringing, harmful, abusive, or otherwise violates applicable law.
          </li>
          <li>
            Platnm reserves the right to remove content and suspend or terminate
            accounts that violate these Terms.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">4. Intellectual Property</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            All intellectual property rights in the Services, including
            software, design, branding, and related materials (excluding
            user-submitted content), are owned by Platnm.
          </li>
          <li>
            You may not copy, modify, distribute, reverse engineer, decompile,
            or attempt to extract the source code of the Services without prior
            written consent.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">5. Software and Code Ownership</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            All software and technical assets associated with Platnm are the
            property of Platnm.
          </li>
          <li>Unauthorized reproduction, distribution, or modification is prohibited.</li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">6. Disclaimers</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            The Services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, whether
            express or implied.
          </li>
          <li>
            Platnm does not guarantee uninterrupted, secure, or error-free access
            to the Services.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">7. Limitation of Liability</h2>
        <p className="mb-10">
          To the maximum extent permitted by law, Platnm shall not be liable
          for any indirect, incidental, consequential, special, or punitive
          damages arising out of or relating to your use of the Services.
        </p>

        <h2 className="mb-3 text-xl font-semibold">8. Termination</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            You may terminate your account at any time through the application
            settings.
          </li>
          <li>
            Platnm reserves the right to suspend or terminate access to the
            Services if you violate these Terms.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">9. Changes to Terms</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>We may revise these Terms from time to time.</li>
          <li>
            If material changes are made, we will provide notice through the
            application or via email. Continued use of the Services after such
            notice constitutes acceptance of the updated Terms.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">10. Contact Us</h2>
        <p className="mb-2">
          For questions regarding these Terms, please contact:
        </p>
        <p className="mb-10">
          <a
            href="mailto:platnmapp@gmail.com"
            className="text-gray-700 underline hover:text-black"
          >
            platnmapp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
