import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { statsCards, projects, orders, analyticsData } from '../../data/dashboardData';
import styles from './Dashboard.module.css';
import chartActiveUsers from '../../assets/chart-active-users.png'
import heroChakra from '../../assets/hero-chakra.png'
import charSalesOverview from '../../assets/chart-sales-overview.png'

function Dashboard() {

  const handleViewProject = (projectId) => {
    console.log('View project:', projectId);
    alert(`View project ${projectId}`);
  };

  const handleViewAll = () => {
    console.log('View All clicked');
    alert('View All feature');
  };

  return (
    <div className={styles.dashboard}>
      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {statsCards.map((stat) => (
          <Card key={stat.id} className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statInfo}>
                <p className={styles.statTitle}>{stat.title}</p>
                <h2 className={styles.statValue}>{stat.value}</h2>
                <span className={`${styles.statTrend} ${styles[stat.trendType]}`}>
                  {stat.trend}
                </span>
              </div>
              <div className={styles.statIcon}>{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Big Cards */}
      <div className={styles.bigCards}>
        <Card className={styles.bigCard}>
          <div className={styles.bigCardContent}>
            <div className={styles.bigCardText}>
              <p className={styles.bigCardSubtitle}>Built by developers</p>
              <h3 className={styles.bigCardTitle}>Purity UI Dashboard</h3>
              <p className={styles.bigCardDescription}>
                From colors, cards, typography to complex elements, you will find the full documentation.
              </p>
              <Button variant="link" size="sm" className={styles.readMoreButton} onClick={handleViewAll}>
                Read more →
              </Button>
            </div>
            <div className={styles.bigCardImage}>
              <img src={heroChakra} alt="Chakra" className={styles.heroImage} />
            </div>
          </div>
        </Card>

        <Card className={`${styles.bigCard} ${styles.gradientCard}`}>
          <div className={styles.bigCardContent}>
            <div className={styles.bigCardText}>
              <h3 className={styles.bigCardTitle}>Work with the Rockets</h3>
              <p className={styles.bigCardDescription}>
                Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
              </p>
              <Button variant="link" size="sm" className={styles.readMoreButton} onClick={handleViewAll}>
                Read more →
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Analytics Cards */}
      <div className={styles.analyticsGrid}>
        <Card className={styles.analyticsCard}>
          <div className={styles.analyticsHeader}>
            <div>
              <h3 className={styles.analyticsTitle}>Active Users</h3>
              <p className={styles.analyticsSubtitle}>
                ({analyticsData.users.change}) than last week
              </p>
            </div>
          </div>
          <div className={styles.analyticsGraph}>
            <img
              src={chartActiveUsers}
              alt="Active Users chart"
              className={styles.chartImage}
            />
          </div>

          <div className={styles.analyticsMetrics}>
            {analyticsData.users.metrics.map((metric, idx) => (
              <div key={idx} className={styles.metric}>
                <p className={styles.metricLabel}>{metric.label}</p>
                <p className={styles.metricValue}>{metric.value}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className={styles.analyticsCard}>
          <div className={styles.analyticsHeader}>
            <div>
              <h3 className={styles.analyticsTitle}>Sales overview</h3>
              <p className={styles.analyticsSubtitle}>
                ({analyticsData.sales.change}) more in 2021
              </p>
            </div>
          </div>
          <div className={styles.analyticsGraph}>
            <img
              src={charSalesOverview}
              alt="Sales overview chart"
              className={styles.chartImage}
            />
          </div>
        </Card>
      </div>

      {/* Content Cards */}
      <div className={styles.contentGrid}>
        <Card className={styles.projectsCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Projects</h3>
            <p className={styles.cardSubtitle}>30 done this month ✓</p>
          </div>
          <div className={styles.projectsHeaderRow}>
            <div className={styles.projectsHeaderCell}>COMPANIES</div>
            <div className={styles.projectsHeaderCell}>MEMBERS</div>
            <div className={styles.projectsHeaderCell}>BUDGET</div>
            <div className={styles.projectsHeaderCell}>COMPLETION</div>
            <div className={styles.projectsHeaderCell}></div>
          </div>
          <div className={styles.projectsList}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectRow}>
                <div className={styles.projectCompany}>
                  <span className={styles.projectIcon}>📁</span>
                  <span className={styles.projectName}>{project.name}</span>
                </div>
                <div className={styles.projectMembers}>
                  {project.members.join(' ')}
                </div>
                <div className={styles.projectBudget}>{project.budget}</div>
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className={styles.progressText}>{project.progress}%</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={styles.viewButton}
                  onClick={() => handleViewProject(project.id)}
                >
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className={styles.ordersCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Orders overview</h3>
            <p className={styles.cardSubtitle}>+30% this month ✓</p>
          </div>
          <div className={styles.ordersList}>
            {orders.map((order) => (
              <div key={order.id} className={styles.orderItem}>
                <div className={styles.orderIcon}>{order.icon}</div>
                <div className={styles.orderInfo}>
                  <p className={styles.orderTitle}>{order.title}</p>
                  <p className={styles.orderDate}>{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
