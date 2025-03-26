import React from 'react';
import { ClipboardList, Binary, TrendingUp, Target, RefreshCw, BarChart3 } from 'lucide-react';

const iconMap = {
  clipboard: ClipboardList,
  binary: Binary,
  trending: TrendingUp,
  target: Target,
  refresh: RefreshCw,
  chart: BarChart3,
};

const PredictiveAnalytics = ({workflow}) => {
  const {title, Content, steps} = workflow;
  console.log(steps);
  // const title = "HOW PREDICTIVE A  NALYTICS WORKS"
  const subtitle = "Predictive Analytics is a scalable and user-friendly tool, ideal for businesses of all sizes."
  const cards = [
    {
      icon: "clipboard",
      title: "Data Collection & Preparation",
      description:
        "Collect and clean historical data from multiple sources to ensure accuracy and reliability. This step is crucial for creating a solid foundation for analysis.",
    },
    {
      icon: "binary",
      title: "Algorithm Selection & Modelling",
      description:
        "Use machine learning models and statistical algorithms to uncover patterns and trends. This helps in deriving valuable insights from complex datasets.",
    },
    {
      icon: "trending",
      title: "Outcome Forecasting",
      description:
        "Apply predictive models to forecast key business metrics, such as sales or customer behavior. This enables informed, proactive decision-making.",
    },
    {
      icon: "target",
      title: "Actionable Decision-Making",
      description:
        "Utilize the insights from forecasts to optimize strategies and improve efficiency. This drives better decisions and enhances business performance.",
    },
    {
      icon: "refresh",
      title: "Continuous Improvement",
      description:
        "Regularly update and refine models with new data to maintain accuracy. This ensures adaptability to evolving business needs and market changes.",
    },
    {
      icon: "chart",
      title: "Data Visualization & Insights Communication",
      description:
        "Present analysis results through intuitive visualizations and dashboards. This makes complex data easier to interpret and actionable for decision-makers.",
    },
  ]
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">{title}</h3>
          <p className="text-gray-400">{Content}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-start space-y-4 p-6 rounded-lg"
              >
                <div className="p-2 rounded-lg bg-gray-800">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold">{card.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;