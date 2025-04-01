// src/components/mongo-status-checker/mongo-status-checker.tsx
import React, { useEffect, useState } from 'react';

export const MongoStatusChecker = () => {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch('https://connectdb-0yav.onrender.com/api/check-db')
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status === 'connected' ? '✅ Connected' : '❌ Failed: ' + data.message);
      })
      .catch((err) => {
        setStatus('❌ Error: ' + err.message);
      });
  }, []);

  return <div>MongoDB 連線狀態：{status}</div>;
};
