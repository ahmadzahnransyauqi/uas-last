import React from "react";
import MembershipLayout from "./membership-layout"; // reuse existing layout for consistent colors/styles
import Header from "./header";
import Footer from "./footer";

const FeatureCard = ({ title, desc, icon, onClick }) => (
  <div className="dashboard-card" onClick={onClick} role="button" tabIndex={0}>
    <div className="card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <button className="btn btn-primary">Open</button>
  </div>
);

export default function UserDashboard() {
  return (
    <MembershipLayout>
      <Header />
      <main className="dashboard-container">
        <h1 className="page-title">User Dashboard</h1>
        <p className="muted">
          Access your training, classes, nutrition plan, and body assessments.
        </p>

        <section className="dashboard-grid">
          <FeatureCard
            title="Personal Training"
            desc="One-on-one sessions & tailored workout plans."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM4 20c0-2.2 4.5-4 8-4s8 1.8 8 4v1H4v-1z" />
              </svg>
            }
            onClick={() => window.location.assign("/personal-training")}
          />
          <FeatureCard
            title="Group Classes"
            desc="Join live group sessions and community classes."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm7 8v-1c0-2-4-3.5-7-3.5s-7 1.5-7 3.5v1h14z" />
              </svg>
            }
            onClick={() => window.location.assign("/group-classes")}
          />
          <FeatureCard
            title="Nutrition Guidance"
            desc="Personalised meal plans and tracking."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 11 7 11s7-5.7 7-11c0-3.9-3.1-7-7-7z" />
              </svg>
            }
            onClick={() => window.location.assign("/nutrition")}
          />
          <FeatureCard
            title="Body Assessment"
            desc="Track measurements, progress photos and tests."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 3c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" />
              </svg>
            }
            onClick={() => window.location.assign("/body-assessment")}
          />
        </section>
      </main>
      <Footer />
    </MembershipLayout>
  );
}
