const Project = () => {
   return(
    <section id= "projects" className="project-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
            <div className="project-card">
             <img src="/forecast_chart.png"
                      alt="AI driven Inventory Prediction System"
                      className="project-card img"
             />
             <h3>AI-Driven Inventory Demand Forecasting System (Django + React + TensorFlow) </h3>
             <p>This project implements a professional, full-stack application for time-series demand forecasting. It uses a Recurrent Neural Network (LSTM) to predict future inventory needs based on historical sales data.</p>
             <a 
                   href="https://github.com/Adi2329002/AI-Driven-Inventory-prediction" 
                   rel="noopener noreferrer" 
                   className="btn btn-primary"
                  >
                 Repo Link
                 </a>
            </div>
        </div>
    </section>
   );
};

export default Project