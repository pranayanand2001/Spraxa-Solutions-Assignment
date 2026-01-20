import { useState } from 'react';
import Card from '../../components/common/Card/Card';
import Tabs from '../../components/common/Tabs/Tabs';
import Toggle from '../../components/common/Toggle/Toggle';
import Avatar from '../../components/common/Avatar/Avatar';
import Button from '../../components/common/Button/Button';
import { user, conversations, platformSettings, profileProjects } from '../../data/profileData';
import styles from './Profile.module.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [settings, setSettings] = useState(platformSettings);

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: '📦' },
    { id: 'teams', label: 'TEAMS', icon: '📄' },
    { id: 'projects', label: 'PROJECTS', icon: '🔧' },
  ];

  const handleToggleChange = (category, id, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, enabled: value } : item
      ),
    }));
    console.log(`Toggle ${id} in ${category} changed to:`, value);
  };

  const handleReply = (conversationId) => {
    console.log('Reply to conversation:', conversationId);
    alert(`Reply to conversation ${conversationId} - This would open a reply form`);
  };

  const handleViewAll = (projectId) => {
    console.log('View All for project:', projectId);
    alert(`View All for project ${projectId}`);
  };

  const handleCreateProject = () => {
    console.log('Create New Project clicked');
    alert('Create New Project - This would open a modal');
  };

  const handleEditProfile = () => {
    console.log('Edit Profile clicked');
    alert('Edit Profile - This would open an edit form');
  };

  return (
    <div className={styles.profile}>
      {/* Profile Header */}
      <Card className={styles.profileHeader}>
        <div className={styles.profileContent}>
          <div className={styles.avatarSection}>
            <Avatar size="large">{user.avatar}</Avatar>
            <Button variant="ghost" size="sm" className={styles.editButton} onClick={handleEditProfile}>
              ✏️
            </Button>
          </div>
          <div className={styles.profileInfo}>
            <h2 className={styles.profileName}>{user.name}</h2>
            <p className={styles.profileEmail}>{user.email}</p>
          </div>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </Card>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Platform Settings */}
        <Card className={styles.settingsCard}>
          <h3 className={styles.cardTitle}>Platform Settings</h3>
          
          <div className={styles.settingsSection}>
            <h4 className={styles.sectionLabel}>ACCOUNT</h4>
            {settings.account.map((setting) => (
              <Toggle
                key={setting.id}
                id={setting.id}
                label={setting.label}
                checked={setting.enabled}
                onChange={(value) => handleToggleChange('account', setting.id, value)}
              />
            ))}
          </div>

          <div className={styles.settingsSection}>
            <h4 className={styles.sectionLabel}>APPLICATION</h4>
            {settings.application.map((setting) => (
              <Toggle
                key={setting.id}
                id={setting.id}
                label={setting.label}
                checked={setting.enabled}
                onChange={(value) => handleToggleChange('application', setting.id, value)}
              />
            ))}
          </div>
        </Card>

        {/* Profile Information */}
        <Card className={styles.infoCard}>
          <h3 className={styles.cardTitle}>Profile Information</h3>
          <p className={styles.bio}>{user.bio}</p>
          <div className={styles.divider}></div>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Full Name:</span>
              <span className={styles.detailValue}>{user.fullName}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Mobile:</span>
              <span className={styles.detailValue}>{user.mobile}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Email:</span>
              <span className={styles.detailValue}>{user.emailContact}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Location:</span>
              <span className={styles.detailValue}>{user.location}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Social Media:</span>
              <div className={styles.socialLinks}>
                <a href={user.socialMedia.facebook} className={styles.socialLink}>f</a>
                <a href={user.socialMedia.twitter} className={styles.socialLink}>t</a>
                <a href={user.socialMedia.instagram} className={styles.socialLink}>i</a>
              </div>
            </div>
          </div>
        </Card>

        {/* Conversations */}
        <Card className={styles.conversationsCard}>
          <h3 className={styles.cardTitle}>Conversations</h3>
          <div className={styles.conversationsList}>
            {conversations.map((conversation) => (
              <div key={conversation.id} className={styles.conversationItem}>
                <Avatar size="medium">{conversation.avatar}</Avatar>
                <div className={styles.conversationInfo}>
                  <h4 className={styles.conversationName}>{conversation.name}</h4>
                  <p className={styles.conversationMessage}>{conversation.message}</p>
                </div>
                <Button
                  variant="link"
                  size="sm"
                  className={styles.replyButton}
                  onClick={() => handleReply(conversation.id)}
                >
                  REPLY
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Projects */}
      <Card className={styles.projectsCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Projects</h3>
          <p className={styles.cardSubtitle}>Architects design houses</p>
        </div>
        <div className={styles.projectsGrid}>
          {profileProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>{project.image}</div>
              <div className={styles.projectContent}>
                <p className={styles.projectNumber}>{project.title}</p>
                <h4 className={styles.projectName}>{project.name}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectFooter}>
                  <div className={styles.projectMembers}>
                    {project.members.join(' ')}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={styles.viewAllButton}
                    onClick={() => handleViewAll(project.id)}
                  >
                    VIEW ALL
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" className={styles.createProjectCard} onClick={handleCreateProject}>
            <div className={styles.createIcon}>+</div>
            <p className={styles.createText}>Create a New Project</p>
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
