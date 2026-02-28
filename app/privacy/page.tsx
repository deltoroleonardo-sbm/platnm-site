import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[800px] px-6 py-10">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </Link>

        <h1 className="mb-2 text-2xl font-semibold">Platnm Privacy Policy</h1>
        <p className="mb-10 text-gray-600">Effective Date: January 31, 2026</p>

        <p className="mb-6">
          This Privacy Policy describes how Platnm (&quot;Platnm,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
          and protects information when you use the Platnm mobile application
          and related services (the &quot;Services&quot;).
        </p>
        <p className="mb-10">
          By accessing or using the Services, you acknowledge that you have
          read and understood this Privacy Policy.
        </p>

        <h2 className="mb-3 text-xl font-semibold">1. Information We Collect</h2>

        <h3 className="mb-2 mt-6 font-medium">I. Account Information</h3>
        <p className="mb-2">
          When you create an account, we collect the following information:
        </p>
        <ul className="mb-6 list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Username</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Profile photo</li>
          <li>Preferred music streaming platform (Spotify or Apple Music)</li>
          <li>Favorite songs selected during onboarding</li>
        </ul>

        <h3 className="mb-2 mt-6 font-medium">II. Usage Information</h3>
        <p className="mb-2">
          We collect information regarding your activity within the Services,
          including:
        </p>
        <ul className="mb-6 list-disc pl-6 space-y-1">
          <li>Songs shared with other users</li>
          <li>Text notes and replies attached to shared songs</li>
          <li>Like and dislike ratings</li>
          <li>Friend connections and profile interactions</li>
        </ul>

        <h3 className="mb-2 mt-6 font-medium">III. Device Information</h3>
        <p className="mb-2">
          We collect limited technical information about your device, including:
        </p>
        <ul className="mb-6 list-disc pl-6 space-y-1">
          <li>Device type</li>
          <li>Operating system</li>
          <li>General diagnostic and performance data</li>
        </ul>

        <h3 className="mb-2 mt-6 font-medium">IV. Tracking Technologies</h3>
        <p className="mb-2">
          We use analytics and monitoring tools to understand usage patterns and
          improve the Services. This includes:
        </p>
        <ul className="mb-6 list-disc pl-6 space-y-1">
          <li>Event tracking</li>
          <li>Limited session replay recording</li>
        </ul>
        <p className="mb-10">
          Sensitive text inputs are automatically masked during session replay.
        </p>

        <h2 className="mb-3 text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p className="mb-2">
          We use the information we collect for the following purposes:
        </p>
        <ul className="mb-10 list-disc pl-6 space-y-1">
          <li>To provide, operate, and maintain the Services.</li>
          <li>To personalize user experience.</li>
          <li>To communicate with users regarding updates, notifications, or support matters.</li>
          <li>To analyze usage trends and improve functionality.</li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">3. Sharing of Information</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>We do not sell or license user data to third parties.</li>
          <li>
            We use third-party service providers to operate the Services,
            including providers for database hosting, authentication, analytics,
            push notifications, and music link conversion. These providers
            receive only the information necessary to perform their services.
          </li>
          <li>
            Contact phone numbers accessed from your device are transmitted to
            our servers solely to determine whether your contacts are
            registered Platnm users. Contact phone numbers are used only for
            matching purposes and are not stored or retained.
          </li>
          <li>
            We may disclose information if required by law or if reasonably
            necessary to protect our rights, users, or the integrity of the
            Services.
          </li>
          <li>
            We may share anonymized or aggregated information that does not
            identify individual users.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">4. Data Retention</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            We retain user information for as long as necessary to operate the
            Services.
          </li>
          <li>
            Users may delete their account through the application settings.
            Upon deletion, account data is removed from our active systems,
            subject to any applicable legal requirements.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">5. Security</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>
            We implement reasonable administrative and technical safeguards
            designed to protect user information.
          </li>
          <li>
            No method of transmission or storage is completely secure.
            Accordingly, we cannot guarantee absolute security.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">6. Children&apos;s Privacy</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>The Services are not intended for individuals under the age of 13.</li>
          <li>We do not knowingly collect personal information from children under 13.</li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">7. Changes to This Policy</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>We may update this Privacy Policy from time to time.</li>
          <li>
            If material changes are made, we will provide notice through the
            application or via email. Continued use of the Services after such
            notice constitutes acceptance of the revised policy.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">8. Your Choices</h2>
        <ul className="mb-10 list-disc pl-6 space-y-2">
          <li>Users may update or delete account information within the application.</li>
          <li>
            Users may control device permissions, including access to contacts,
            through their device settings.
          </li>
        </ul>

        <h2 className="mb-3 text-xl font-semibold">9. Contact Us</h2>
        <p className="mb-2">
          If you have questions regarding this Privacy Policy, please contact:
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
