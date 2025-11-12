import React, { useEffect } from 'react';

import { useGarageStore } from 'hostApp/store';
import { eventBus } from 'hostApp/eventBus';

const Customers = () => {
  // const customers = useGarageStore((s:any) => s.customers);
  // console.log(customers,'customers >>>> ');
  // console.log(useGarageStore,'useGarageStore >>>> ');
  // const addCustomer = useGarageStore((s:any) => s.addCustomer);
    const { setSelectedCustomer } = useGarageStore();
  // const { customers, addCustomer } = useGarageStore();


  const data = [
    { id: 1, name: 'John Doe', car: 'Honda City' },
    { id: 2, name: 'Jane Smith', car: 'Hyundai Creta' },
  ];

  useEffect(() => {
    eventBus.on('job-created', (job: any) => alert(`New job from JobsApp: ${job}`));
  }, []);

  const handleSelect = (c:any) => {
    setSelectedCustomer(c);
    eventBus.emit('customer-selected', c);
  };
  return (
    <div style={{ padding: 10, border: '1px solid #ccc', margin: 10 }}>
      <h2>Customers Module</h2>
      {/* <ul>{data.map((c) => <li key={c.id}>{c.name} - {c.car}</li>)}</ul> */}
       <ul>
        {data.map((c:any) => (
          <>
            <li key={c.id}>{c.name}</li>
             <button onClick={() => handleSelect(c)}>Select</button>
          </>
        ))}
      </ul>
     
    </div>
  );
};

export default Customers;
