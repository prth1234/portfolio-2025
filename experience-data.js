/**
 * Work Experience Data Configuration
 * -------------------------------------------------------------
 * Edit this file or experience-data.json to update the Work Experience section easily.
 * - Both main/index2.html (Experience page) and main/index4.html (More page)
 *   dynamically fetch experience-data.json (with window.EXPERIENCE_DATA fallback)
 *   to stay 100% in sync without hardcoding.
 */

window.EXPERIENCE_DATA = {
  // Top Hero Tagline / Summary
  tagline: "Innovative Software Engineer with 2.5+ years of experience architecting future-ready cloud platforms, high-scale distributed systems, and agentic AI solutions—redefining cost efficiency, reliability, and scale for modern enterprises.",

  // Tag badge next to tagline
  tag: "Software Engineer",

  // List of Work Experiences (Phases 01 to 04)
  experiences: [
    {
      id: "phase01",
      role: "SWE",
      company: "Flexera GCC",
      period: "Aug 2024 - Present",
      promotionTimeline: [
        {
          title: "Software Engineer",
          period: "Apr 2026 – Present",
          status: "Promoted",
          isCurrent: true
        },
        {
          title: "Associate Software Engineer",
          period: "Aug 2024 – Apr 2026",
          status: "Initial Role",
          isCurrent: false
        }
      ],
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "AI Developer Platform & Agent Ecosystem",
          detail: "Spearheaded the 0→1 development of an AI developer platform and marketplace, empowering 10+ teams to build and embed 50+ AI agents and MCPs while unifying IAM, guardrails, observability, monitoring, alerting, testing, and evaluation into a standardized framework. Established reusable production-ready primitives (RAG, memory management, task planning, multi-agent orchestration, tool orchestration, model routing, sandboxed execution, human-in-the-loop, state and checkpointing), moving leadership from quarterly to monthly commitments."
        },
        {
          title: "Agentic FinOps Workflows & Cloud Rightsizing",
          detail: "Built and maintain E2E agentic workflows for cloud cost visualization and optimization, backed by a semantic layer, an MCP API wrapper for CRUD operations, and specialized agents for documentation RAG, forecasting, anomaly detection, and platform migration planning, surfaced via chat, scheduled workflows, and on-demand execution. Architected an intelligent rightsizing agent that identifies and executes instance rightsizing, Spot, Reserved Instance, and Savings Plan optimizations with sandboxed execution and human-in-the-loop approval, plus prompt-driven interactive dashboards and reports across Cloud Cost, ITAM, ITV, and ITSM."
        },
        {
          title: "Multi-Cloud Ingestion & Lakehouse ETL",
          detail: "Built scalable multi-cloud billing ingestion pipelines for AWS, GCP, Databricks, and Snowflake, orchestrating distributed batch jobs to process massive, high-cardinality cost datasets into a unified data lakehouse powering dashboards, reports, APIs, and agents. Implemented bill locking via Delta Lake Time Travel for consistent point-in-time billing snapshots, contributing to a 21% reduction in cloud infrastructure costs."
        },
        {
          title: "Cost Intelligence APIs & Platform Reliability",
          detail: "Developed scalable, resilient microservices and gRPC/REST APIs for the Hybrid Cloud FinOps platform serving 50k+ customers, with granular cost attribution and multi-dimensional drill-downs (services, cost centers, accounts, teams, tags, SKUs, usage patterns) and ~30% average cost savings for Fortune 500 enterprises. Re-architected data aggregation and persistence for async, high-throughput execution under load, while maintaining a 100% P1/P2 incident resolution rate within a 15-minute SLA."
        }
      ]
    },
    {
      id: "phase02",
      role: "SDE Intern",
      company: "Finvolv",
      period: "Jan 2024 - Aug 2024",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "Advanced IAM System",
          detail: "Developed an advanced IAM system for complex financial hierarchies, handling intricate authentication scenarios with seamless role-based access and compliance across a configurable, low-code Loan Origination and Loan Management platform."
        },
        {
          title: "Custom Auth Layer on Keycloak",
          detail: "Engineered a custom auth layer on top of Keycloak to meet rigorous financial security standards, implementing multi-level authorization flows, fraud-detection hooks, and compliance-ready audit trails—achieving up to 45% lower token issuance and validation latency and higher authentication throughput."
        },
        {
          title: "High-Performance Core Financial APIs",
          detail: "Built high-performance REST APIs for credit evaluation, underwriting, and customer onboarding in a high-volume financial system, cutting response times by 30% through write-behind caching, request coalescing, speculative prefetching, adaptive rate limiting, zero-copy serialization, connection pooling, and asynchronous I/O."
        },
        {
          title: "Event-Driven Integration & MFA",
          detail: "Streamlined an event-driven integration framework between Loan Origination and Loan Management platforms using Kafka to accelerate credit evaluations, and implemented Multi-Factor Authentication via Keycloak, enhancing security while keeping the user experience smooth."
        }
      ]
    },
    {
      id: "phase03",
      role: "ML Intern",
      company: "Irdeto",
      period: "Jun 2023 - Aug 2023",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "AI-Driven Content Discovery & Engagement",
          detail: "Designed and implemented real-time metadata enrichment and automated indexing pipelines, significantly improving OTT platform discoverability and user engagement through intelligent content tagging and categorization."
        },
        {
          title: "Computer Vision & NLP Integration for Media Intelligence",
          detail: "Developed advanced workflows combining CNN-based object recognition and BERT-based NLP to generate feature maps for image processing, enabling iterative model optimization and improving content analysis accuracy over time."
        },
        {
          title: "Real-Time Event Recognition & Personalization",
          detail: "Built on-the-fly event detection and dynamic content tagging systems for video streams, boosting metadata design and searchability by 50%+, while strengthening content recommendation, personalization, targeted advertising, and real-time analytics."
        }
      ]
    },
    {
      id: "phase04",
      role: "Data Science Intern",
      company: "To The New",
      period: "Jun 2022 - Aug 2022",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "Strategic NLP for Marketing & Product Optimization",
          detail: "Built an NLP pipeline to extract key insights from time series and unstructured data, boosting sentiment classification accuracy through advanced pre-processing and ML algorithms, and leveraging those insights to inform targeted marketing and business strategy."
        },
        {
          title: "Scalable Big Data Engineering & Optimization",
          detail: "Engineered scalable data workflows to process and analyze 2PB of real-time text data, optimizing storage and retrieval, with data cleaning, normalization, and feature engineering using transformer-based embeddings, outlier detection, and adversarial data augmentation to improve text representation and reduce noise."
        },
        {
          title: "Automated Market Intelligence & Reporting",
          detail: "Developed automated reports for streamlined future analyses, providing critical insights into market trends and customer behavior patterns, accelerating decision-making and responsiveness to market shifts."
        }
      ]
    }
  ]
};
