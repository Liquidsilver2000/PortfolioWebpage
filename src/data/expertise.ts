export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  beforeAfter?: { before: string; after: string };
}

export interface ExpertiseArea {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  accentColor: string;
  description: string;
  skills: string[];
  projects: Project[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "data-engineer",
    title: "DATA ENGINEER",
    subtitle: "Data Flow & Pipelines in Motion",
    icon: "Database",
    color: "#00F0FF",
    accentColor: "#2A4BFF",
    description: "Building scalable data pipelines, streaming systems, and robust data infrastructure for enterprise-scale analytics.",
    skills: ["ETL/ELT Design", "Stream Processing", "Data Modeling", "Apache Spark", "Kafka", "Airflow"],
    projects: [
      {
        id: "de-1",
        title: "Real-Time Event Streaming Platform",
        description: "Built a Kafka-based streaming pipeline processing 2M+ events/second with sub-100ms latency for real-time fraud detection.",
        image: `${import.meta.env.BASE_URL}images/project-2.jpg`,
        tools: ["Apache Kafka", "Spark Streaming", "PostgreSQL", "Redis", "Kubernetes"],
        metrics: [
          { label: "Events/Day", value: "50B+" },
          { label: "Latency", value: "<80ms" },
          { label: "Uptime", value: "99.99%" }
        ],
        architecture: ["Kafka Cluster (5 brokers)", "Spark Streaming Jobs", "Redis Cache Layer", "PostgreSQL Warehouse", "Grafana Monitoring"],
        beforeAfter: { before: "Batch processing: 4hr delay", after: "Real-time: <80ms latency" }
      },
      {
        id: "de-2",
        title: "Cloud-Native Data Warehouse",
        description: "Designed and implemented a petabyte-scale data warehouse on Azure Synapse with automated ETL pipelines.",
        image: `${import.meta.env.BASE_URL}images/project-11.jpg`,
        tools: ["Azure Synapse", "Databricks", "Delta Lake", "Azure Data Factory", "Power BI"],
        metrics: [
          { label: "Data Volume", value: "2.3 PB" },
          { label: "Query Speed", value: "10x faster" },
          { label: "Cost Reduction", value: "40%" }
        ],
        architecture: ["Azure Data Lake Gen2", "Synapse SQL Pool", "Databricks Cluster", "ADF Pipelines", "Power BI Premium"],
        beforeAfter: { before: "On-prem SQL Server: 6TB limit", after: "Cloud Lakehouse: 2.3 PB" }
      },
      {
        id: "de-3",
        title: "Data Quality & Governance Framework",
        description: "Implemented automated data quality checks and lineage tracking across 500+ data sources.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["Great Expectations", "Apache Atlas", "dbt", "Snowflake", "Python"],
        metrics: [
          { label: "Data Sources", value: "500+" },
          { label: "Quality Score", value: "98.7%" },
          { label: "Issues Detected", value: "12K/mo" }
        ],
        architecture: ["Great Expectations Suite", "dbt Tests", "Apache Atlas Lineage", "Snowflake Monitoring", "Slack Alerts"]
      }
    ]
  },
  {
    id: "data-architect",
    title: "DATA ARCHITECT",
    subtitle: "System Blueprints & Infrastructure",
    icon: "Layers",
    color: "#7000FF",
    accentColor: "#00F0FF",
    description: "Designing enterprise data architectures, lakehouse platforms, and governance frameworks.",
    skills: ["Data Lakehouse", "Enterprise Architecture", "Data Governance", "Schema Design", "Cost Optimization", "Security"],
    projects: [
      {
        id: "da-1",
        title: "Enterprise Data Lakehouse",
        description: "Architected a test unified lakehouse platform serving 10 users across 1 business unit.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["Delta Lake", "Azure Databricks", "Azure AD"],
        metrics: [
          { label: "Active Users", value: "10K+" },
          { label: "Business Units", value: "50" },
          { label: "Cost Savings", value: "$2M/yr" }
        ],
        architecture: ["Bronze-Silver-Gold Zones", "Unity Catalog", "Azure AD Integration", "Auto-scaling Clusters", "CI/CD with Terraform"]
      },
      {
        id: "da-2",
        title: "Data Governance Framework",
        description: "Built a test comprehensive data governance platform with automated compliance checks and data lineage.",
        image: `${import.meta.env.BASE_URL}images/project-11.jpg`,
        tools: ["Azure Purview", "Python", "REST APIs"],
        metrics: [
          { label: "Governed Assets", value: "25K+" },
          { label: "Compliance", value: "SOC2/ISO" },
          { label: "Lineage Coverage", value: "95%" }
        ],
        architecture: ["Metadata Repository", "Policy Engine", "Lineage Tracker", "Compliance Dashboard", "Alert System"]
      },
      {
        id: "da-3",
        title: "Multi-Cloud Data Strategy",
        description: "Designed a hybrid cloud data strategy across Azure, AWS, and GCP with unified data fabric.",
        image: `${import.meta.env.BASE_URL}images/project-6.jpg`,
        tools: ["Azure", "AWS", "GCP", "Databricks", "Apache Iceberg"],
        metrics: [
          { label: "Cloud Providers", value: "3" },
          { label: "Data Transfer", value: "10TB/day" },
          { label: "Availability", value: "99.99%" }
        ],
        architecture: ["Cross-cloud Networking", "Iceberg Tables", "Federated Query", "Data Mesh", "Global Load Balancer"]
      }
    ]
  },
  {
    id: "gen-ai",
    title: "GENERATIVE AI",
    subtitle: "Creative Intelligence",
    icon: "Sparkles",
    color: "#FF00A0",
    accentColor: "#7000FF",
    description: "Building LLM-powered applications, RAG systems, AI agents, and prompt engineering pipelines.",
    skills: ["LLM Orchestration", "Prompt Engineering", "RAG Systems", "AI Agents", "Fine-tuning", "Vector DBs"],
    projects: [
      {
        id: "ga-1",
        title: "Enterprise RAG Knowledge Base",
        description: "Built a RAG-powered internal knowledge base processing 1M+ documents with 95% accuracy.",
        image: `${import.meta.env.BASE_URL}images/project-3.jpg`,
        tools: ["OpenAI GPT-4", "LangChain", "Pinecone", "FastAPI", "React"],
        metrics: [
          { label: "Documents", value: "1M+" },
          { label: "Accuracy", value: "95%" },
          { label: "Latency", value: "<2s" }
        ],
        architecture: ["Document Ingestion", "Embedding Pipeline", "Pinecone Vector Store", "LangChain RAG", "FastAPI Backend"]
      },
      {
        id: "ga-2",
        title: "AI Agent Orchestration Platform",
        description: "Developed a multi-agent system for automated customer support with tool-calling capabilities.",
        image: `${import.meta.env.BASE_URL}images/project-8.jpg`,
        tools: ["LangGraph", "CrewAI", "OpenAI", "Python", "Redis"],
        metrics: [
          { label: "Agents", value: "12" },
          { label: "Resolution Rate", value: "89%" },
          { label: "Response Time", value: "<5s" }
        ],
        architecture: ["Agent Supervisor", "Tool Registry", "Memory Store", "LLM Gateway", "Evaluation Framework"]
      },
      {
        id: "ga-3",
        title: "Code Generation Assistant",
        description: "Fine-tuned CodeLlama for internal codebase with 40% developer productivity improvement.",
        image: `${import.meta.env.BASE_URL}images/project-1.jpg`,
        tools: ["CodeLlama", "LoRA", "Hugging Face", "vLLM", "Docker"],
        metrics: [
          { label: "Code Acceptance", value: "78%" },
          { label: "Productivity Gain", value: "40%" },
          { label: "Models Served", value: "5" }
        ],
        architecture: ["LoRA Fine-tuning", "vLLM Inference", "Feedback Loop", "A/B Testing", "Model Registry"]
      }
    ]
  },
  {
    id: "deep-learning",
    title: "DEEP LEARNING",
    subtitle: "Advanced Neural Systems",
    icon: "Brain",
    color: "#00F0FF",
    accentColor: "#2A4BFF",
    description: "Designing and training deep neural networks for computer vision, NLP, and multi-modal applications.",
    skills: ["CNNs", "Transformers", "PyTorch", "TensorFlow", "Multi-modal", "Model Optimization"],
    projects: [
      {
        id: "dl-1",
        title: "Medical Image Diagnosis CNN",
        description: "Trained a ResNet-based model for X-ray anomaly detection achieving 97.3% accuracy.",
        image: `${import.meta.env.BASE_URL}images/project-4.jpg`,
        tools: ["PyTorch", "MONAI", "W&B", "Docker", "AWS"],
        metrics: [
          { label: "Accuracy", value: "97.3%" },
          { label: "Inference", value: "50ms" },
          { label: "AUC-ROC", value: "0.992" }
        ],
        architecture: ["ResNet-152 Backbone", "Attention Module", "Data Augmentation", "Ensemble Voting", "Grad-CAM"]
      },
      {
        id: "dl-2",
        title: "Transformer-based NLP Pipeline",
        description: "Built a BERT-based pipeline for entity extraction and sentiment analysis on 10M+ documents.",
        image: `${import.meta.env.BASE_URL}images/project-8.jpg`,
        tools: ["Hugging Face", "PyTorch", "spaCy", "FastAPI", "Kubernetes"],
        metrics: [
          { label: "F1 Score", value: "0.94" },
          { label: "Throughput", value: "5K docs/s" },
          { label: "Entities", value: "50+ types" }
        ],
        architecture: ["BERT-base", "CRF Layer", "Multi-task Head", "ONNX Export", "Triton Inference"]
      },
      {
        id: "dl-3",
        title: "Multi-Modal Content Understanding",
        description: "Developed a CLIP-based system for understanding image-text relationships in e-commerce.",
        image: `${import.meta.env.BASE_URL}images/project-4.jpg`,
        tools: ["CLIP", "PyTorch", "FAISS", "FastAPI", "React"],
        metrics: [
          { label: "Retrieval@10", value: "92%" },
          { label: "Products", value: "10M+" },
          { label: "Latency", value: "<100ms" }
        ],
        architecture: ["CLIP Encoder", "FAISS Index", "Reranking Model", "API Gateway", "CDN Cache"]
      }
    ]
  },
  {
    id: "machine-learning",
    title: "MACHINE LEARNING",
    subtitle: "Intelligent Systems",
    icon: "Cpu",
    color: "#7000FF",
    accentColor: "#FF00A0",
    description: "End-to-end ML pipeline development from feature engineering to production deployment.",
    skills: ["Classification", "Regression", "Clustering", "Feature Engineering", "XGBoost", "scikit-learn"],
    projects: [
      {
        id: "ml-1",
        title: "Customer Churn Prediction",
        description: "Built an XGBoost model predicting customer churn with 94% precision, saving $5M annually.",
        image: `${import.meta.env.BASE_URL}images/project-9.jpg`,
        tools: ["XGBoost", "Python", "MLflow", "Airflow", "PostgreSQL"],
        metrics: [
          { label: "Precision", value: "94%" },
          { label: "Recall", value: "91%" },
          { label: "Annual Savings", value: "$5M" }
        ],
        architecture: ["Feature Store", "XGBoost Model", "MLflow Tracking", "Airflow DAG", "Slack Alerts"]
      },
      {
        id: "ml-2",
        title: "Dynamic Pricing Engine",
        description: "Developed a real-time pricing optimization system using reinforcement learning.",
        image: `${import.meta.env.BASE_URL}images/project-10.jpg`,
        tools: ["RLlib", "Python", "Redis", "FastAPI", "Docker"],
        metrics: [
          { label: "Revenue Lift", value: "12%" },
          { label: "Convergence", value: "2 weeks" },
          { label: "SKUs", value: "500K+" }
        ],
        architecture: ["State Encoder", "Policy Network", "Reward Shaper", "A/B Test", "Model Store"]
      },
      {
        id: "ml-3",
        title: "Anomaly Detection System",
        description: "Built an unsupervised anomaly detection system for IoT sensor data using isolation forests.",
        image: `${import.meta.env.BASE_URL}images/project-1.jpg`,
        tools: ["scikit-learn", "Python", "Kafka", "InfluxDB", "Grafana"],
        metrics: [
          { label: "Sensors", value: "100K+" },
          { label: "Detection Rate", value: "96%" },
          { label: "False Positive", value: "<2%" }
        ],
        architecture: ["Kafka Ingestion", "Feature Extractor", "Isolation Forest", "Alert Manager", "Grafana Dashboard"]
      }
    ]
  },
  {
    id: "python",
    title: "PYTHON",
    subtitle: "Code Intelligence",
    icon: "Code2",
    color: "#FFD700",
    accentColor: "#FF8C00",
    description: "Expert-level Python development for data engineering, ML systems, automation, and API development.",
    skills: ["FastAPI", "Django", "Pandas", "NumPy", "Asyncio", "Cython"],
    projects: [
      {
        id: "py-1",
        title: "High-Performance Data Processing Library",
        description: "Built a Cython-accelerated data processing library achieving 50x speedup over pandas.",
        image: `${import.meta.env.BASE_URL}images/project-2.jpg`,
        tools: ["Cython", "NumPy", "PyArrow", "pytest", "GitHub Actions"],
        metrics: [
          { label: "Speedup", value: "50x" },
          { label: "Test Coverage", value: "98%" },
          { label: "Downloads", value: "100K+" }
        ],
        architecture: ["Cython Kernels", "PyArrow Backend", "Lazy Evaluation", "Memory Pool", "Benchmark Suite"]
      },
      {
        id: "py-2",
        title: "Microservices API Platform",
        description: "Architected a FastAPI-based microservices platform serving 1M+ requests/day.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
        metrics: [
          { label: "Requests/Day", value: "1M+" },
          { label: "P95 Latency", value: "<20ms" },
          { label: "Uptime", value: "99.99%" }
        ],
        architecture: ["API Gateway", "Auth Service", "ML Inference", "Cache Layer", "Event Bus"]
      },
      {
        id: "py-3",
        title: "Test Automation Framework",
        description: "Created a comprehensive testing framework for data pipelines with 500+ test cases.",
        image: `${import.meta.env.BASE_URL}images/project-12.jpg`,
        tools: ["pytest", "Great Expectations", "Docker", "CI/CD", "Allure"],
        metrics: [
          { label: "Test Cases", value: "500+" },
          { label: "Execution Time", value: "<5min" },
          { label: "Coverage", value: "95%" }
        ],
        architecture: ["Test Fixtures", "Data Generators", "Mock Services", "Report Generator", "CI Integration"]
      }
    ]
  },
  {
    id: "statistics",
    title: "STATISTICS",
    subtitle: "Mathematical Precision",
    icon: "BarChart3",
    color: "#00FF88",
    accentColor: "#00F0FF",
    description: "Rigorous statistical analysis, experimental design, and probabilistic modeling for data-driven decisions.",
    skills: ["A/B Testing", "Bayesian Inference", "Hypothesis Testing", "Regression", "Experimental Design", "Causal Inference"],
    projects: [
      {
        id: "st-1",
        title: "Large-Scale A/B Testing Platform",
        description: "Designed and analyzed 200+ experiments driving $20M+ in incremental revenue.",
        image: `${import.meta.env.BASE_URL}images/project-7.jpg`,
        tools: ["R", "Python", "Stan", "Snowflake", "Tableau"],
        metrics: [
          { label: "Experiments", value: "200+" },
          { label: "Revenue Impact", value: "$20M+" },
          { label: "Confidence", value: "95%" }
        ],
        architecture: ["Randomization", "Power Analysis", "Sequential Testing", "CUPED", "Dashboard"]
      },
      {
        id: "st-2",
        title: "Bayesian Demand Forecasting",
        description: "Built a Bayesian hierarchical model for demand forecasting with 15% MAPE improvement.",
        image: `${import.meta.env.BASE_URL}images/project-10.jpg`,
        tools: ["PyMC", "Python", "ArviZ", "Pandas", "Plotly"],
        metrics: [
          { label: "MAPE", value: "8.5%" },
          { label: "Products", value: "50K+" },
          { label: "Horizon", value: "90 days" }
        ],
        architecture: ["Hierarchical Model", "Prior Elicitation", "MCMC Sampling", "Posterior Analysis", "Forecast API"]
      },
      {
        id: "st-3",
        title: "Causal Impact Analysis",
        description: "Implemented causal inference models to measure marketing campaign effectiveness.",
        image: `${import.meta.env.BASE_URL}images/project-9.jpg`,
        tools: ["CausalPy", "Python", "scikit-learn", "BigQuery", "Looker"],
        metrics: [
          { label: "Campaigns", value: "50+" },
          { label: "ROI Accuracy", value: "±5%" },
          { label: "Decision Time", value: "-70%" }
        ],
        architecture: ["Synthetic Control", "Difference-in-Diff", "Propensity Score", "Bootstrap CI", "Report Gen"]
      }
    ]
  },
  {
    id: "sql",
    title: "SQL",
    subtitle: "Database Intelligence",
    icon: "Table",
    color: "#FF6B35",
    accentColor: "#FFD700",
    description: "Advanced SQL optimization, complex query design, and database architecture for enterprise systems.",
    skills: ["Query Optimization", "Stored Procedures", "Window Functions", "Indexing", "Partitioning", "CTE Design"],
    projects: [
      {
        id: "sq-1",
        title: "Query Optimization Initiative",
        description: "Optimized 500+ queries reducing average execution time from 45s to <200ms.",
        image: `${import.meta.env.BASE_URL}images/project-11.jpg`,
        tools: ["PostgreSQL", "SQL Server", "EXPLAIN", "pgBadger", "Python"],
        metrics: [
          { label: "Queries", value: "500+" },
          { label: "Avg Time", value: "<200ms" },
          { label: "Cost Saved", value: "$500K" }
        ],
        architecture: ["Query Analysis", "Index Design", "Partitioning", "Materialized Views", "Monitoring"],
        beforeAfter: { before: "Avg 45s per query", after: "Avg <200ms per query" }
      },
      {
        id: "sq-2",
        title: "Real-Time Analytics Views",
        description: "Designed materialized views and streaming aggregations for real-time dashboards.",
        image: `${import.meta.env.BASE_URL}images/project-7.jpg`,
        tools: ["PostgreSQL", "TimescaleDB", "Redis", "Grafana", "dbt"],
        metrics: [
          { label: "Dashboards", value: "25+" },
          { label: "Refresh Time", value: "<5s" },
          { label: "Users", value: "2K+" }
        ],
        architecture: ["MVs with Refresh", "Incremental Models", "Stream Aggregates", "Cache Layer", "API"]
      },
      {
        id: "sq-3",
        title: "Cross-Database Migration",
        description: "Led migration of 50TB data warehouse from Oracle to Snowflake with zero downtime.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["Snowflake", "Oracle", "Python", "Airflow", "Great Expectations"],
        metrics: [
          { label: "Data Volume", value: "50TB" },
          { label: "Downtime", value: "0min" },
          { label: "Cost Reduction", value: "60%" }
        ],
        architecture: ["Schema Mapping", "ETL Pipeline", "Validation", "Cutover Plan", "Rollback"]
      }
    ]
  },
  {
    id: "azure",
    title: "AZURE",
    subtitle: "Cloud Infrastructure",
    icon: "Cloud",
    color: "#0089D6",
    accentColor: "#00F0FF",
    description: "Azure cloud architecture, ML infrastructure, data platforms, and DevOps automation.",
    skills: ["Azure ML", "Data Factory", "Synapse", "DevOps", "AKS", "Terraform"],
    projects: [
      {
        id: "az-1",
        title: "Azure ML Platform",
        description: "Built an enterprise MLOps platform on Azure serving 50+ models in production.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["Azure ML", "AKS", "Azure DevOps", "Terraform", "Prometheus"],
        metrics: [
          { label: "Models", value: "50+" },
          { label: "Deployments", value: "500/day" },
          { label: "Uptime", value: "99.95%" }
        ],
        architecture: ["Azure ML Workspace", "AKS Cluster", "Model Registry", "Pipeline Automation", "Monitoring"]
      },
      {
        id: "az-2",
        title: "Data Factory Orchestration",
        description: "Designed 200+ ADF pipelines processing 10TB+ daily across 100+ data sources.",
        image: `${import.meta.env.BASE_URL}images/project-2.jpg`,
        tools: ["Azure Data Factory", "Databricks", "Azure SQL", "Logic Apps", "PowerShell"],
        metrics: [
          { label: "Pipelines", value: "200+" },
          { label: "Daily Volume", value: "10TB+" },
          { label: "Success Rate", value: "99.8%" }
        ],
        architecture: ["Pipeline Factory", "Error Handling", "Monitoring", "Self-healing", "Alerting"]
      },
      {
        id: "az-3",
        title: "Infrastructure as Code",
        description: "Automated Azure infrastructure provisioning with Terraform and Azure DevOps.",
        image: `${import.meta.env.BASE_URL}images/project-12.jpg`,
        tools: ["Terraform", "Azure DevOps", "Azure Policy", "Packer", "Ansible"],
        metrics: [
          { label: "Resources", value: "1000+" },
          { label: "Deploy Time", value: "<30min" },
          { label: "Drift", value: "0%" }
        ],
        architecture: ["TF Modules", "CI/CD Pipeline", "Policy as Code", "State Management", "Cost Tags"]
      }
    ]
  },
  {
    id: "power-bi",
    title: "POWER BI",
    subtitle: "Executive Insights",
    icon: "PieChart",
    color: "#F2C811",
    accentColor: "#FF8C00",
    description: "Designing executive dashboards, KPI tracking systems, and self-service analytics platforms.",
    skills: ["DAX", "Data Modeling", "Row-Level Security", "Premium", "Paginated Reports", "Embedded"],
    projects: [
      {
        id: "pb-1",
        title: "Executive KPI Dashboard",
        description: "Built a real-time executive dashboard tracking 50+ KPIs across all business units.",
        image: `${import.meta.env.BASE_URL}images/project-7.jpg`,
        tools: ["Power BI", "DAX", "Azure Synapse", "Azure AD", "REST API"],
        metrics: [
          { label: "KPIs", value: "50+" },
          { label: "Users", value: "500+" },
          { label: "Refresh", value: "Real-time" }
        ],
        architecture: ["Star Schema", "DAX Measures", "RLS", "Bookmarks", "Mobile Layout"]
      },
      {
        id: "pb-2",
        title: "Financial Planning Platform",
        description: "Created an interactive financial planning and forecasting dashboard with what-if analysis.",
        image: `${import.meta.env.BASE_URL}images/project-10.jpg`,
        tools: ["Power BI", "DAX", "Azure Analysis", "Excel", "REST API"],
        metrics: [
          { label: "Scenarios", value: "10+" },
          { label: "Accuracy", value: "±2%" },
          { label: "Users", value: "200+" }
        ],
        architecture: ["What-if Params", "Forecast Model", "Variance Analysis", "Drill-through", "Export"]
      },
      {
        id: "pb-3",
        title: "Operational Analytics Hub",
        description: "Developed a comprehensive operations analytics platform with predictive alerts.",
        image: `${import.meta.env.BASE_URL}images/project-6.jpg`,
        tools: ["Power BI", "Azure Stream", "SQL", "Python", "Azure Functions"],
        metrics: [
          { label: "Metrics", value: "200+" },
          { label: "Alerts/Day", value: "500+" },
          { label: "Response Time", value: "-80%" }
        ],
        architecture: ["Stream Ingestion", "ML Alerts", "Hierarchies", "Custom Viz", "Auto-refresh"]
      }
    ]
  },
  {
    id: "etl-pipelines",
    title: "ETL PIPELINES",
    subtitle: "Structured Data Movement",
    icon: "GitBranch",
    color: "#00FF88",
    accentColor: "#00F0FF",
    description: "Designing robust, scalable ETL/ELT pipelines with monitoring, error handling, and optimization.",
    skills: ["Apache Airflow", "dbt", "Spark", "Data Validation", "CDC", "Batch/Streaming"],
    projects: [
      {
        id: "etl-1",
        title: "Real-Time CDC Pipeline",
        description: "Built a Change Data Capture system replicating 1000+ tables with <1s latency.",
        image: `${import.meta.env.BASE_URL}images/project-2.jpg`,
        tools: ["Debezium", "Kafka", "Spark", "Delta Lake", "Grafana"],
        metrics: [
          { label: "Tables", value: "1000+" },
          { label: "Latency", value: "<1s" },
          { label: "Events/hr", value: "100M+" }
        ],
        architecture: ["Debezium Connector", "Kafka Topics", "Spark Stream", "Delta Merge", "Monitor"]
      },
      {
        id: "etl-2",
        title: "dbt Transformation Framework",
        description: "Implemented a dbt-based transformation layer with 500+ models and automated testing.",
        image: `${import.meta.env.BASE_URL}images/project-11.jpg`,
        tools: ["dbt", "Snowflake", "Great Expectations", "CI/CD", "Docs"],
        metrics: [
          { label: "Models", value: "500+" },
          { label: "Tests", value: "2000+" },
          { label: "Doc Coverage", value: "100%" }
        ],
        architecture: ["Staging", "Intermediate", "Marts", "Tests", "Docs"]
      },
      {
        id: "etl-3",
        title: "Data Quality Automation",
        description: "Created an automated data quality framework catching 99.5% of anomalies before production.",
        image: `${import.meta.env.BASE_URL}images/project-12.jpg`,
        tools: ["Great Expectations", "Airflow", "Python", "Slack", "JIRA"],
        metrics: [
          { label: "Anomalies Caught", value: "99.5%" },
          { label: "Rules", value: "5000+" },
          { label: "MTTD", value: "<1min" }
        ],
        architecture: ["Expectations Suite", "Validation", "Alerting", "Remediation", "Reporting"]
      }
    ]
  },
  {
    id: "web-dev",
    title: "WEB DEV",
    subtitle: "Interactive Systems",
    icon: "Globe",
    color: "#FF6B35",
    accentColor: "#FFD700",
    description: "Full-stack web development with React, Node.js, and AI-powered interactive applications.",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "API Design", "WebSocket"],
    projects: [
      {
        id: "wd-1",
        title: "Real-Time ML Dashboard",
        description: "Built a real-time ML monitoring dashboard with WebSocket streaming and interactive visualizations.",
        image: `${import.meta.env.BASE_URL}images/project-7.jpg`,
        tools: ["React", "D3.js", "WebSocket", "FastAPI", "Redis"],
        metrics: [
          { label: "Users", value: "500+" },
          { label: "Latency", value: "<50ms" },
          { label: "Models", value: "50+" }
        ],
        architecture: ["React Frontend", "WebSocket", "FastAPI", "Redis Pub/Sub", "Charts"]
      },
      {
        id: "wd-2",
        title: "AI-Powered Documentation",
        description: "Developed an AI-powered documentation platform with auto-generated explanations.",
        image: `${import.meta.env.BASE_URL}images/project-3.jpg`,
        tools: ["Next.js", "OpenAI", "MDX", "Prisma", "Vercel"],
        metrics: [
          { label: "Docs", value: "10K+" },
          { label: "Accuracy", value: "92%" },
          { label: "Time Saved", value: "80%" }
        ],
        architecture: ["Next.js App", "OpenAI API", "MDX Renderer", "Search", "Analytics"]
      },
      {
        id: "wd-3",
        title: "Data API Gateway",
        description: "Created a unified API gateway for data services with rate limiting and caching.",
        image: `${import.meta.env.BASE_URL}images/project-5.jpg`,
        tools: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
        metrics: [
          { label: "Requests/Day", value: "10M+" },
          { label: "P99 Latency", value: "<10ms" },
          { label: "Uptime", value: "99.99%" }
        ],
        architecture: ["Load Balancer", "API Gateway", "Cache", "Rate Limiter", "Auth"]
      }
    ]
  },
  {
    id: "scrum",
    title: "CERTIFIED SCRUM DEV",
    subtitle: "Agile Execution",
    icon: "Users",
    color: "#00FF88",
    accentColor: "#00F0FF",
    description: "Leading agile teams, sprint execution, and delivering complex data products with Scrum methodology.",
    skills: ["Sprint Planning", "CI/CD", "Team Leadership", "Backlog Management", "Retrospectives", "Velocity Tracking"],
    projects: [
      {
        id: "sc-1",
        title: "Agile Data Platform Delivery",
        description: "Led a cross-functional team of 12 delivering a data platform in 6-month timeline using Scrum.",
        image: `${import.meta.env.BASE_URL}images/project-12.jpg`,
        tools: ["JIRA", "Azure DevOps", "Confluence", "Slack", "Miro"],
        metrics: [
          { label: "Team Size", value: "12" },
          { label: "Sprints", value: "12" },
          { label: "On-Time", value: "100%" }
        ],
        architecture: ["Sprint Planning", "Daily Standup", "Sprint Review", "Retro", "Backlog Refinement"]
      },
      {
        id: "sc-2",
        title: "CI/CD Pipeline Automation",
        description: "Implemented full CI/CD automation reducing deployment time from 2 days to 30 minutes.",
        image: `${import.meta.env.BASE_URL}images/project-12.jpg`,
        tools: ["Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
        metrics: [
          { label: "Deploy Time", value: "30min" },
          { label: "Frequency", value: "20/day" },
          { label: "Failures", value: "<1%" }
        ],
        architecture: ["Git Flow", "Build Pipeline", "Test Stage", "Deploy Stage", "Rollback"]
      },
      {
        id: "sc-3",
        title: "Data Product Incubator",
        description: "Established a data product incubator delivering 15 MVPs in 12 months using agile methodology.",
        image: `${import.meta.env.BASE_URL}images/project-7.jpg`,
        tools: ["Scrum", "Design Thinking", "Figma", "Python", "Azure"],
        metrics: [
          { label: "MVPs", value: "15" },
          { label: "Success Rate", value: "80%" },
          { label: "Time to MVP", value: "3 weeks" }
        ],
        architecture: ["Ideation", "Prototype", "Validate", "Iterate", "Scale"]
      }
    ]
  }
];

export const techStack = [
  { category: "Languages", items: ["Python", "R", "SQL", "Scala", "TypeScript", "Bash"] },
  { category: "ML/DL", items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face", "ONNX"] },
  { category: "Data", items: ["Spark", "Kafka", "Airflow", "dbt", "Delta Lake", "Snowflake"] },
  { category: "Cloud", items: ["Azure", "AWS", "Databricks", "Kubernetes", "Terraform", "Docker"] },
  { category: "Visualization", items: ["Power BI", "Tableau", "Plotly", "D3.js", "Grafana", "Streamlit"] },
  { category: "DevOps", items: ["Git", "CI/CD", "MLflow", "Great Expectations", "Prometheus", "Grafana"] }
];
