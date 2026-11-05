/**
 * Work Experience Data Configuration
 * -------------------------------------------------------------
 * Edit this file to update the Work Experience section easily.
 * - Each experience represents a role/phase on the page.
 * - Each item in `points` creates:
 *     - A short headline button (tab) on the right
 *     - An expanded detailed description panel on top when clicked
 * - You can add, edit, or reorder points (usually 3 to 4 points per role).
 */

window.EXPERIENCE_DATA = {
  // Top Hero Tagline / Summary
  tagline: "Software Engineer with 2.5+ years of experience building agentic AI platforms, multi-cloud FinOps systems, and high-scale distributed services, turning cloud spend, data, and AI into measurable business outcomes for Fortune 500 enterprises.",

  // Tag badge next to tagline
  tag: "Software Engineer",

  // List of Work Experiences (Phases 01 to 04)
  experiences: [
    {
      id: "phase01",
      role: "SDE | Flexera GCC | Aug 2024 - Present",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "AI Developer Platform & Agent Ecosystem",
          detail: "Spearheaded the 0-to-1 build of an AI developer platform and marketplace, enabling 10+ teams to build and embed 50+ AI agents and MCPs into their products. Unified IAM, guardrails, observability, monitoring, alerting, testing, and evaluation into one standardized framework, and established reusable primitives (RAG, memory, task planning, multi-agent orchestration, parallel and serial workflows, tool orchestration, model routing, sandboxed execution, human-in-the-loop, state and checkpointing, prompt templates) that moved leadership from quarterly to monthly commitments."
        },
        {
          title: "Agentic FinOps Workflows & Rightsizing Agent",
          detail: "Built and maintain end-to-end agentic workflows for cloud cost visualization and optimization, backed by a semantic layer, an MCP API wrapper for CRUD operations, and specialized agents for documentation RAG, forecasting, anomaly detection, and migration planning. Architected a rightsizing agent that executes instance rightsizing, Spot, Reserved Instance, and Savings Plan optimizations with sandboxed execution and human-in-the-loop approval, and enabled prompt-generated dashboards and reports across Cloud Cost, ITAM, ITV, and ITSM."
        },
        {
          title: "Multi-Cloud Cost Platform & Billing Lakehouse",
          detail: "Developed scalable, resilient microservices for the Hybrid Cloud Cost Optimization platform serving 50k+ customers with ~30% average cost savings. Engineered multi-dimensional cost APIs (gRPC and REST) for drill-downs across services, accounts, teams, tags, vendors, and SKUs, and built billing ingestion pipelines for AWS, GCP, Databricks, Snowflake, and more into a unified data lakehouse powering dashboards, APIs, and agents."
        },
        {
          title: "Delta Lake Bill Locking & On-Call SLA",
          detail: "Implemented bill locking with Delta Lake Time Travel to keep consistent, point-in-time billing snapshots, contributing to a 21% reduction in cloud infrastructure costs. Collaborated across teams on the full product lifecycle and maintained a 100% resolution rate for P1/P2 incidents within a 15-minute SLA, backed by thorough technical documentation."
        }
      ]
    },
    {
      id: "phase02",
      role: "SDE Intern | Finvolv | Jan 2024 - Aug 2024",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "Advanced IAM for Financial Hierarchies",
          detail: "Developed an advanced IAM system for the Finvolv core platform, a configurable, low-code loan origination and management system, handling complex financial hierarchies and authentication scenarios with seamless role-based access and compliance. Added Multi-Factor Authentication via Keycloak to strengthen security without hurting user experience."
        },
        {
          title: "Custom Auth Layer on Keycloak",
          detail: "Engineered a custom auth layer on top of Keycloak with multi-level authorization flows, fraud-detection hooks, and compliance-ready audit trails, achieving up to 45% lower token issuance and validation latency and higher authentication throughput."
        },
        {
          title: "High-Performance Financial APIs",
          detail: "Built REST APIs for credit evaluation, underwriting, and customer onboarding in a high-volume financial system, cutting response times by 30% through write-behind caching, request coalescing, speculative prefetching, adaptive rate limiting, zero-copy serialization, connection pooling, and asynchronous I/O."
        },
        {
          title: "Event-Driven LOS and LMS Integration",
          detail: "Streamlined an event-driven integration framework between the Loan Origination and Loan Management platforms using Kafka, speeding up credit evaluation workflows."
        }
      ]
    },
    {
      id: "phase03",
      role: "ML Intern | Irdeto | Jun 2023 - Aug 2023",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "AI-Driven Content Discovery & Engagement",
          detail: "Designed and developed real-time metadata enrichment and automated indexing, significantly improving discoverability and user engagement on OTT platforms."
        },
        {
          title: "Computer Vision & NLP for Media Intelligence",
          detail: "Built a workflow combining CNN-based computer vision and BERT-based NLP to recognize objects and generate feature maps for image processing, enabling model optimization through iterative training and rising accuracy over time."
        },
        {
          title: "Recommendation, Personalization & Ads",
          detail: "Strengthened content recommendation, personalization, real-time analytics, and targeted advertising through intelligent content analysis and metadata tagging."
        },
        {
          title: "Real-Time Event Recognition & Tagging",
          detail: "Orchestrated on-the-fly event recognition and content tagging for dynamic video streams, improving metadata design and searchability by more than 50%."
        }
      ]
    },
    {
      id: "phase04",
      role: "Data Science Intern | To The New | Jun 2022 - Aug 2022",
      learnMoreUrl: "https://drive.google.com/file/d/1mye4Ah8pFF9ACPcuk2JnVS_l2otH-faC/view?usp=sharing",
      points: [
        {
          title: "NLP Pipeline for Sentiment & Strategy",
          detail: "Built an NLP pipeline to extract key insights from time series and unstructured data, boosting sentiment classification accuracy through advanced preprocessing and ML algorithms, and used the insights to inform targeted marketing and business strategy."
        },
        {
          title: "Text Preprocessing & Feature Engineering",
          detail: "Performed data cleaning, normalization, and feature engineering with transformer-based embeddings, outlier detection, and adversarial data augmentation to improve text representation, reduce noise, and optimize downstream analysis."
        },
        {
          title: "Petabyte-Scale Data Workflows",
          detail: "Engineered scalable workflows to process and analyze 2 petabytes of real-time text data, optimizing storage and retrieval for real-time insights."
        },
        {
          title: "Automated Market Reports",
          detail: "Developed automated reports for streamlined future analyses, giving clear insight into market trends and customer behavior patterns."
        }
      ]
    }
  ]
};