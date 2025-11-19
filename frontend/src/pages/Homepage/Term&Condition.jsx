import Footer from "../../component/footer";
import Header from "../../component/header";

export default function TermsCondition() {
  return (
    <>
      <Header />
      <div className="text-white text-[20px] p-8">
      <h2 className="font-bold text-[30px] text-center">Terms & Conditions</h2>
      <h3 className="font-bold mt-3">
        Welcome to Roger Sumatera Gym (“we,” “our,” or “us”). By accessing or
        using our website and services, you agree to comply with and be bound by
        the following Terms and Conditions. Please read them carefully before
        using our site or becoming a member.
      </h3>
      <h3 className="mt-5 font-bold">Acceptance of Terms</h3>
      <h3>
        By visiting our website, purchasing a membership, or participating in
        our fitness programs, you agree to these Terms and Conditions and our
        Privacy Policy. If you do not agree, please discontinue using our
        services.
      </h3>
      <h3 className="mt-5 font-bold">Membership and Registration</h3>
      <ul className="list-disc ml-5">
        <li>You must be at least 18 years old to register for a membership.</li>
        <li>
          Members are responsible for maintaining the confidentiality of their
          account credentials.
        </li>
        <li>
          Memberships are non-transferable and non-refundable, except where
          required by law or specifically stated otherwise.
        </li>
        <li>
          Roger Sumatera Gym reserves the right to suspend or terminate
          memberships for rule violations or inappropriate behavior within the
          facility.
        </li>
      </ul>
      <h3 className="mt-5 font-bold">Payments and Billing</h3>
      <ul className="list-disc ml-5">
        <li>
          Membership fees, class fees, and any other charges must be paid
          according to the selected plan.
        </li>
        <li>
          Late or missed payments may result in suspension of membership
          privileges.
        </li>
        <li>
          All prices and packages are subject to change with prior notice.
        </li>
        <li>Promotional offers cannot be combined unless explicitly stated.</li>
      </ul>
      <h3 className="mt-5 font-bold">Facility and Equipment Usage</h3>
      <ul className="list-disc ml-5">
        <li>
          Members must follow all posted rules and instructions from gym staff
          at all times.
        </li>
        <li>Proper athletic attire and shoes are required.</li>
        <li>Members must use equipment safely and respectfully.</li>
        <li>
          Roger Sumatera Gym is not liable for injuries resulting from improper
          equipment use, failure to follow safety guidelines, or negligence.
        </li>
      </ul>
      <h3 className="mt-5 font-bold">Health and Safety</h3>
      <ul className="list-disc ml-5">
        <li>
          Members should consult a qualified healthcare provider before
          beginning any exercise program.
        </li>
        <li>
          By participating, you acknowledge that all physical activities carry
          inherent risks of injury.
        </li>
        <li>
          Roger Sumatera Gym will not be responsible for any injury, health
          condition, or medical emergency that occurs within or outside our
          facilities.
        </li>
      </ul>
      <h3 className="mt-5 font-bold">Personal Belongings</h3>
      <ul className="list-disc ml-5">
        <li>
          Lockers are provided for temporary use only and are not considered
          secure storage.
        </li>
        <li>
          Roger Sumatera Gym is not responsible for lost, stolen, or damaged
          personal items.
        </li>
        <li>Members are advised to avoid bringing valuables into the gym.</li>
      </ul>
      <h3 className="mt-5 font-bold">Website User and Content</h3>
      <ul className="list-disc ml-5">
        <li>
          You may not use our website for any illegal or harmful purpose,
          including spreading malware or unauthorized content.
        </li>
        <li>
          We reserve the right to modify, suspend, or remove any part of the
          website or services at any time.
        </li>
        <li>
          All website content — including text, images, videos, and logos — is
          owned by Roger Sumatera Gym and protected by copyright. Unauthorized
          use is prohibited.
        </li>
      </ul>
      <h3 className="mt-5 font-bold">Cancellation and Refund Policy</h3>
      <ul className="list-disc ml-5">
        <li>
          Membership cancellation requests must be made at least 7 days before
          the next billing cycle.
        </li>
        <li>
          Certain plans or promotional memberships may have specific
          cancellation terms, which will be stated during signup.
        </li>
        <li>
          Refunds are only issued under exceptional circumstances, subject to
          management approval.
        </li>
      </ul>
      <h3 className="mt-5 font-bold">Limitation of Liability</h3>
      <ul className="list-disc ml-5">
        <li>
          Roger Sumatera Gym, its staff, and affiliates shall not be held liable
          for any damages, injuries, or losses arising from participation in gym
          activities or use of the website.
        </li>
        <li>
          Members assume full responsibility for their personal safety and
          fitness decisions.
        </li>
      </ul>

      <h3 className="mt-5 font-bold">
        Roger Sumatera Gym reserves the right to modify or update these Terms
        and Conditions at any time. Any changes will be posted on this page, and
        continued use of our services after such changes constitutes acceptance
        of the revised terms.
      </h3>
      </div>
      <Footer />
    </>
  );
}
