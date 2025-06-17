import React, { useContext, useEffect, useState } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import { AuthContext } from '../context/AuthContext';
import '../styles/dashboard.css';

const Subscriptions = () => {
  const { user } = useContext(AuthContext);
  const { getSubscriptions, subscribe, cancelSubscription } = useContext(SubscriptionContext);
  const [plans, setPlans] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { availablePlans, currentSubscription } = await getSubscriptions();
      setPlans(availablePlans || []);
      setCurrent(currentSubscription || null);
      setLoading(false);
    };
    fetchData();
  }, [getSubscriptions]);

  const handleSubscribe = async (planId) => {
    setLoading(true);
    const res = await subscribe(planId);
    setMessage(res?.message || 'Subscription updated!');
    setCurrent(res?.subscription || null);
    setLoading(false);
  };

  const handleCancel = async () => {
    setLoading(true);
    const res = await cancelSubscription();
    setMessage(res?.message || 'Subscription cancelled.');
    setCurrent(null);
    setLoading(false);
  };

  return (
    <div className="subscriptions-page">
      <h2>My Subscriptions</h2>
      {message && <div className="subscriptions-message">{message}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <section className="subscriptions-section">
            <h3>Current Subscription</h3>
            {current ? (
              <div className="current-subscription">
                <p><strong>Plan:</strong> {current.planName}</p>
                <p><strong>Status:</strong> {current.status}</p>
                <p><strong>Renewal Date:</strong> {current.renewalDate}</p>
                <button onClick={handleCancel} className="cancel-btn">Cancel Subscription</button>
              </div>
            ) : (
              <p>You do not have an active subscription.</p>
            )}
          </section>
          <section className="subscriptions-section">
            <h3>Available Plans</h3>
            <div className="plans-list">
              {plans.map(plan => (
                <div key={plan.id} className={`plan-card${current && current.planId === plan.id ? ' active' : ''}`}>
                  <h4>{plan.name}</h4>
                  <p>{plan.description}</p>
                  <p><strong>Price:</strong> ${plan.price} / {plan.interval}</p>
                  {current && current.planId === plan.id ? (
                    <span className="current-label">Current Plan</span>
                  ) : (
                    <button onClick={() => handleSubscribe(plan.id)} className="subscribe-btn">Choose Plan</button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Subscriptions;
