import React, { useState, useEffect } from 'react'
import './RazorpayMock.css'

const UPI_APPS = [
  { name: 'GPay', color: '#4285F4', letter: 'G' },
  { name: 'PhonePe', color: '#5f259f', letter: 'P' },
  { name: 'Paytm', color: '#00BAF2', letter: 'P' },
  { name: 'BHIM', color: '#00875A', letter: 'B' },
  { name: 'Amazon', color: '#FF9900', letter: 'A' },
  { name: 'Cred', color: '#1a1a2e', letter: 'C' },
]

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', icons: ['G', 'P', 'P', 'B'] },
  { id: 'cards', label: 'Cards', icons: ['V', 'M', 'A'] },
  { id: 'netbanking', label: 'Netbanking', icons: ['H', 'I', 'S'] },
  { id: 'wallet', label: 'Wallet', icons: ['P', 'M'] },
  { id: 'paylater', label: 'Pay Later', icons: ['S'] },
]

const QR_TIMER = 15 * 60 // 15 minutes in seconds

export default function RazorpayMockModal({ amount, userName, phone, onSuccess, onClose }) {
  const [activeMethod, setActiveMethod] = useState('upi')
  const [activeUpiTab, setActiveUpiTab] = useState('qr')
  const [upiId, setUpiId] = useState('')
  const [cardNo, setCardNo] = useState('')
  const [cardExp, setCardExp] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [cardName, setCardName] = useState('')
  const [timer, setTimer] = useState(QR_TIMER)
  const [processing, setProcessing] = useState(false)
  const [selectedBank, setSelectedBank] = useState('')

  const displayAmount = Number(amount).toLocaleString('en-IN')

  useEffect(() => {
    if (activeMethod === 'upi' && activeUpiTab === 'qr') {
      const t = setInterval(() => setTimer(prev => prev > 0 ? prev - 1 : 0), 1000)
      return () => clearInterval(t)
    }
  }, [activeMethod, activeUpiTab])

  const formatTimer = () => {
    const m = Math.floor(timer / 60).toString().padStart(2, '0')
    const s = (timer % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const handlePay = () => {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      onSuccess()
    }, 1800)
  }

  return (
    <div className="rzp-overlay">
      {/* Backdrop */}
      <div className="rzp-backdrop" onClick={onClose} />

      <div className="rzp-container">
        {/* LEFT PANEL */}
        <div className="rzp-left">
          {/* Test Mode ribbon */}
          <div className="rzp-test-ribbon">
            <span>Test Mode</span>
          </div>

          <div className="rzp-left-inner">
            {/* User avatar */}
            <div className="rzp-avatar">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="19" fill="rgba(255,255,255,0.15)" />
                <path d="M19 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" fill="white"/>
              </svg>
            </div>
            <div className="rzp-user-name">{userName}</div>

            {/* Price summary */}
            <div className="rzp-price-box">
              <div className="rzp-price-label">Price Summary</div>
              <div className="rzp-price-amount">₹{displayAmount}</div>
            </div>

            {/* Phone */}
            <div className="rzp-phone-box">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z"/>
                <circle cx="12" cy="18" r="1" fill="rgba(255,255,255,0.7)"/>
              </svg>
              <span>Using as +91 {phone?.slice(-10)}</span>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>

            {/* Illustration */}
            <div className="rzp-illustration">
              <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="70" height="50" rx="6" fill="rgba(255,255,255,0.12)"/>
                <rect x="25" y="48" width="60" height="8" rx="2" fill="rgba(255,255,255,0.2)"/>
                <rect x="25" y="62" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="25" y="72" width="30" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
                <circle cx="140" cy="60" r="30" fill="rgba(255,255,255,0.08)"/>
                <circle cx="140" cy="60" r="20" fill="rgba(255,255,255,0.1)"/>
                <path d="M128 60l8 8 16-16" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Footer */}
            <div className="rzp-left-footer">
              <span>Secured by </span>
              <strong>⚡ Razorpay</strong>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rzp-right">
          {/* Header */}
          <div className="rzp-right-header">
            <span className="rzp-right-title">Payment Options</span>
            <div className="rzp-header-actions">
              <button className="rzp-icon-btn">⋯</button>
              <button className="rzp-icon-btn rzp-close-btn" onClick={onClose}>✕</button>
            </div>
          </div>

          <div className="rzp-right-body">
            {/* Method list */}
            <div className="rzp-method-list">
              {PAYMENT_METHODS.map(m => (
                <button
                  key={m.id}
                  className={`rzp-method-item ${activeMethod === m.id ? 'active' : ''}`}
                  onClick={() => setActiveMethod(m.id)}
                >
                  <span className="rzp-method-label">{m.label}</span>
                  <div className="rzp-method-icons">
                    {m.icons.map((ic, i) => (
                      <div key={i} className="rzp-method-icon-badge">{ic}</div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="rzp-content">

              {/* UPI */}
              {activeMethod === 'upi' && (
                <div className="rzp-upi">
                  <div className="rzp-upi-tabs">
                    <button className={`rzp-upi-tab ${activeUpiTab === 'qr' ? 'active' : ''}`} onClick={() => setActiveUpiTab('qr')}>UPI QR</button>
                    <button className={`rzp-upi-tab ${activeUpiTab === 'id' ? 'active' : ''}`} onClick={() => setActiveUpiTab('id')}>UPI ID</button>
                    <div className="rzp-tab-timer">🕐 {formatTimer()}</div>
                  </div>

                  {activeUpiTab === 'qr' && (
                    <div className="rzp-qr-section">
                      <div className="rzp-qr-left">
                        {/* QR code SVG - pre-rendered pattern */}
                        <div className="rzp-qr-box">
                          <svg viewBox="0 0 100 100" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
                            {/* Top-left corner block */}
                            <rect x="5" y="5" width="26" height="26" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="3"/>
                            <rect x="11" y="11" width="14" height="14" rx="1" fill="#1a1a2e"/>
                            {/* Top-right corner block */}
                            <rect x="69" y="5" width="26" height="26" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="3"/>
                            <rect x="75" y="11" width="14" height="14" rx="1" fill="#1a1a2e"/>
                            {/* Bottom-left corner block */}
                            <rect x="5" y="69" width="26" height="26" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="3"/>
                            <rect x="11" y="75" width="14" height="14" rx="1" fill="#1a1a2e"/>
                            {/* Data pattern */}
                            <rect x="40" y="5" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="50" y="5" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="60" y="5" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="40" y="15" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="58" y="15" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="5" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="15" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="25" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="40" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="50" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="60" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="75" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="88" y="40" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="5" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="18" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="45" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="58" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="70" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="82" y="50" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="5" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="15" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="40" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="55" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="70" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="88" y="60" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="40" y="75" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="52" y="75" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="64" y="75" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="76" y="75" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="88" y="75" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="40" y="88" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="56" y="88" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="70" y="88" width="6" height="6" fill="#1a1a2e"/>
                            <rect x="84" y="88" width="6" height="6" fill="#1a1a2e"/>
                          </svg>
                        </div>

                        <p className="rzp-qr-hint">Scan the QR using any UPI App</p>
                      </div>
                      <div className="rzp-qr-right">
                        <p className="rzp-qr-right-label">Scan the QR using any UPI App</p>
                        <div className="rzp-upi-app-grid">
                          {UPI_APPS.map(app => (
                            <button key={app.name} className="rzp-upi-app-btn" onClick={handlePay}>
                              <div className="rzp-upi-app-icon" style={{ background: app.color }}>{app.letter}</div>
                              <span>{app.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeUpiTab === 'id' && (
                    <div className="rzp-upi-id-section">
                      <p className="rzp-field-label">Enter UPI ID</p>
                      <input
                        className="rzp-input"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={e => setUpiId(e.target.value)}
                      />
                      <button
                        className="rzp-pay-btn"
                        disabled={processing}
                        onClick={handlePay}
                      >
                        {processing ? 'Processing…' : `Pay ₹${displayAmount}`}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Cards */}
              {activeMethod === 'cards' && (
                <div className="rzp-cards-section">
                  <p className="rzp-field-label">Card Number</p>
                  <input className="rzp-input" placeholder="1234 5678 9012 3456" maxLength={19}
                    value={cardNo} onChange={e => setCardNo(e.target.value.replace(/[^0-9]/g,'').replace(/(.{4})/g,'$1 ').trim())} />
                  <div className="rzp-card-row">
                    <div style={{flex:1}}>
                      <p className="rzp-field-label">Expiry</p>
                      <input className="rzp-input" placeholder="MM / YY" maxLength={7}
                        value={cardExp} onChange={e => setCardExp(e.target.value)} />
                    </div>
                    <div style={{flex:1}}>
                      <p className="rzp-field-label">CVV</p>
                      <input className="rzp-input" placeholder="•••" maxLength={4} type="password"
                        value={cardCvv} onChange={e => setCardCvv(e.target.value)} />
                    </div>
                  </div>
                  <p className="rzp-field-label">Name on Card</p>
                  <input className="rzp-input" placeholder="Yug Thakral"
                    value={cardName} onChange={e => setCardName(e.target.value)} />
                  <button className="rzp-pay-btn" disabled={processing} onClick={handlePay}>
                    {processing ? 'Processing…' : `Pay ₹${displayAmount}`}
                  </button>
                </div>
              )}

              {/* Netbanking */}
              {activeMethod === 'netbanking' && (
                <div className="rzp-netbanking-section">
                  <p className="rzp-field-label">Select your Bank</p>
                  <div className="rzp-bank-grid">
                    {['HDFC Bank','ICICI Bank','SBI','Axis Bank','Kotak Bank','Yes Bank','PNB','Bank of Baroda'].map(bank => (
                      <button key={bank}
                        className={`rzp-bank-btn ${selectedBank === bank ? 'selected' : ''}`}
                        onClick={() => setSelectedBank(bank)}>
                        {bank}
                      </button>
                    ))}
                  </div>
                  <button className="rzp-pay-btn" disabled={processing || !selectedBank} onClick={handlePay}>
                    {processing ? 'Redirecting…' : selectedBank ? `Pay via ${selectedBank}` : 'Select a Bank'}
                  </button>
                </div>
              )}

              {/* Wallet */}
              {activeMethod === 'wallet' && (
                <div className="rzp-wallet-section">
                  <p className="rzp-field-label">Choose Wallet</p>
                  <div className="rzp-wallet-list">
                    {[
                      {name:'Paytm', color:'#00BAF2'}, {name:'PhonePe', color:'#5f259f'},
                      {name:'Mobikwik', color:'#21a7db'}, {name:'Freecharge', color:'#22b14c'},
                    ].map(w => (
                      <button key={w.name} className="rzp-wallet-item" onClick={handlePay}>
                        <div className="rzp-wallet-icon" style={{background: w.color}}>{w.name[0]}</div>
                        <span>{w.name}</span>
                        <span className="rzp-wallet-arrow">›</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pay Later */}
              {activeMethod === 'paylater' && (
                <div className="rzp-paylater-section">
                  <div className="rzp-paylater-logo">S</div>
                  <p className="rzp-paylater-name">Simpl Pay Later</p>
                  <p className="rzp-paylater-desc">Buy now, pay in 15 days. No interest, no fees.</p>
                  <button className="rzp-pay-btn" disabled={processing} onClick={handlePay}>
                    {processing ? 'Processing…' : `Pay ₹${displayAmount} via Simpl`}
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="rzp-right-footer">
            By proceeding, I agree to Razorpay's <span className="rzp-link">Privacy Notice</span> · <span className="rzp-link">Edit Preferences</span>
          </div>
        </div>

        {/* Processing overlay */}
        {processing && (
          <div className="rzp-processing-overlay">
            <div className="rzp-spinner" />
            <p>Processing Payment…</p>
          </div>
        )}
      </div>
    </div>
  )
}
