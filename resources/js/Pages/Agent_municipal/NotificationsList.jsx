import React from 'react';

const NotificationsList = ({ notifications }) => {
    console.log(notifications);
  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              backgroundColor: notification.est_lue ? '#f0f0f0' : '#e0e0e0',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          >
            <p>{notification.message}</p>
            <a href={notification.lien}>Voir le signalement</a>
          </div>
        ))
      ) : (
        <p>Aucune notification pour le moment.</p>
      )}
    </div>
  );
};

export default NotificationsList;
