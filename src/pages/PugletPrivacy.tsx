function PugletPrivacy() {
  return (
    <main className="pt-32 pb-24 bg-base-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="badge badge-accent badge-outline mb-6">iOS App</div>
        <h1 className="text-4xl font-bold mb-2">Puglet — Privacy Policy</h1>
        <p className="text-base-content/50 text-sm mb-12">Last updated: March 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
            <p className="text-base-content/70 leading-relaxed">
              Puglet is a children's educational math app developed by Timea Csomorova, operating under the brand PodSparx. We are committed to protecting the privacy of all users, especially children. This policy explains what data we collect, how we use it, and your rights as a parent or guardian.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Data We Do Not Collect</h2>
            <p className="text-base-content/70 leading-relaxed">
              Puglet does not collect, store or share any personal information from its users. We do not collect names, email addresses, location data, device identifiers, or any other personally identifiable information. The app does not require account registration or login.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Children's Privacy (COPPA)</h2>
            <p className="text-base-content/70 leading-relaxed">
              Puglet is designed for children aged 5–7. We take children's privacy extremely seriously and fully comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect any personal information from children under 13. No data is transmitted from the app to any external servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. In-App Purchases</h2>
            <p className="text-base-content/70 leading-relaxed">
              Puglet offers optional in-app purchases to unlock additional content levels. All purchases are processed securely through Apple's App Store. PodSparx does not collect, access or store any payment information. Apple's own privacy policy governs all payment transactions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Third Party Services</h2>
            <p className="text-base-content/70 leading-relaxed">
              Puglet does not integrate any third-party advertising, analytics or tracking services. We do not use third-party SDKs that collect user data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Data Storage</h2>
            <p className="text-base-content/70 leading-relaxed">
              All app progress and game data is stored locally on the user's device only. No data is transmitted to or stored on external servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Parental Rights</h2>
            <p className="text-base-content/70 leading-relaxed">
              As a parent or guardian you have the right to review, request deletion of, or refuse further collection of your child's information. Since we do not collect any personal data, there is nothing to access or delete. If you have any concerns please contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="text-base-content/70 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date. We encourage parents and guardians to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
            <p className="text-base-content/70 leading-relaxed">
              If you have any questions or concerns about this privacy policy or Puglet's data practices please contact us at contact@podsparx.com.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-base-300">
          <p className="text-base-content/40 text-sm">This privacy policy applies to the Puglet iOS app. For our website privacy policy visit <a href="/privacy" className="underline hover:text-primary">podsparx.com/privacy</a>.</p>
        </div>
      </div>
    </main>
  )
}

export default PugletPrivacy