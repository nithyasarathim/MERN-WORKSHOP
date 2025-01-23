import React from 'react';
import { useState } from 'react';
import './Bank.css';

const Bank = () => {
  const [accounts, setAccounts] = useState([]);
  const [currAccount, setCurrAccount] = useState('');
  const [newAccName, setNewAccName] = useState('');
  const [option, setOption] = useState('');
  const [amount, setAmount] = useState(0);

  const createAccount = () => {
    if (!newAccName) {
      alert("Please provide a valid account name");
    } else if (accounts.some(acc => acc.name === newAccName)) {
      alert("Account name already exists");
    } else {
      setAccounts([...accounts, { name: newAccName, balance: 0 }]);
      alert("Account created successfully for "+ newAccName);
      setNewAccName('');
    }
  };

  const deleteAccount = () => {
    if (!currAccount) {
      alert("Please select an account to delete");
    } else {
      const updatedAccounts = accounts.filter(acc => acc.name !== currAccount);
      setAccounts(updatedAccounts);
      alert(`${currAccount} has been deleted`);
      setCurrAccount(''); 
    }
  };
  

  const Transactions = () => {
    if (!currAccount) {
      alert("Please select an account");
    } else if (!option) {
      alert("Please select a transaction option");
    } else if (amount <= 0) {
      alert("Please enter a valid amount");
    } else {
      setAccounts(accounts.map(acc => {
        if (acc.name === currAccount) {
          if (option === 'deposit') {
            return { ...acc, balance: acc.balance + amount };
          } else if (option === 'withdraw') {
            if (acc.balance < amount) {
              alert("Insufficient Balance");
              return acc;
            } else {
              return { ...acc, balance: acc.balance - amount };
            }
          }
        }
        return acc;
      }));
      setAmount(0);
    }
  };

  return (
    <div>
      <h2>BANK APPLICATION</h2>
      <div>
        <h3>Create Account</h3>
        <input 
          type="text" 
          placeholder="Account Name" 
          value={newAccName} 
          onChange={(e) => setNewAccName(e.target.value)} 
        />
        <button onClick={createAccount}>CREATE ACCOUNT</button>
        <button onClick={deleteAccount}>DELETE ACCOUNT</button>

      </div>
      <div>
        <h3>Select Account</h3>
        <select onChange={(e) => setCurrAccount(e.target.value)} value={currAccount}>
          <option value="">Select Account</option>
          {accounts.map(acc => (
            <option key={acc.name} value={acc.name}>
              {acc.name}
            </option>
          ))}
        </select>
      </div>
      <label>Choose your Transaction</label>
      <select onChange={(e) => setOption(e.target.value)}>
        <option value="">Select</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <br></br>
      <input 
        type='number' 
        value={amount} 
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={Transactions}>PROCEED</button>
      <div>
        <h3>Account Balances</h3>
        {accounts.map(acc => (
          <p key={acc.name}>
            <tr>
              <td className='td1'>{acc.name}</td> <p style={{marginLeft:'5px',marginRight:'5px'}}>:</p>
              <td className='td2'>{acc.balance}</td>
            </tr>
            
          </p>
        ))}
      </div>
    </div>
  );
};

export default Bank;
