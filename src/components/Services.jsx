import {
  FaShip,
  FaExchangeAlt,
  FaUserCog,
  FaTruckMoving,
  FaClipboardCheck,
  FaOilCan,
  FaHelicopter,
  FaHandshake,
  FaGasPump,
  FaLeaf,
  FaDraftingCompass,
  FaBuilding,
  FaIndustry,
  FaWater,
  FaTools,
  FaProjectDiagram
} from 'react-icons/fa';
import styles from './Services.module.scss';

const services = [
  {
    icon: <FaShip />,
    title: 'Vessel Chartering',
    description: 'Flexible short- and long-term vessel charters tailored to your cargo and route requirements.'
  },
  {
    icon: <FaExchangeAlt />,
    title: 'Ship-to-Ship (STS) Operations',
    description: 'Safe and efficient cargo transfers between vessels at sea or in port.'
  },
  {
    icon: <FaUserCog />,
    title: 'Vessel Management',
    description: 'Complete technical, operational and crewing management for all vessel types.'
  },
  {
    icon: <FaTruckMoving />,
    title: 'Freight Forwarding',
    description: 'End-to-end coordination of domestic and international cargo movement.'
  },
  {
    icon: <FaClipboardCheck />,
    title: 'Port Agency Services',
    description: 'Reliable port call handling, documentation and turnaround support for ships worldwide.'
  },
  {
    icon: <FaOilCan />,
    title: 'Crude Oil Handling',
    description: 'Professional management of crude oil loading, discharge and storage operations.'
  },
  {
    icon: <FaHelicopter />,
    title: 'Offshore Logistics Support',
    description: 'Transportation of personnel, equipment and supplies to offshore rigs and platforms.'
  },
  {
    icon: <FaHandshake />,
    title: 'Oil Trading Facilitation',
    description: 'Compliance-driven support for crude oil and refined product trading activities.'
  },
  {
    icon: <FaGasPump />,
    title: 'Bunker Supply',
    description: 'Provision of marine fuels and lubricants at competitive prices with timely delivery.'
  },
  {
    icon: <FaLeaf />,
    title: 'Environmental Response',
    description: 'Oil spill response and waste management services to protect marine environments.'
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Marine Infrastructure Development',
    description: 'Design and construction of jetties, quays, breakwaters and other port structures.'
  },
  {
    icon: <FaBuilding />,
    title: 'Civil Construction Projects',
    description: 'Execution of large-scale industrial, commercial and public infrastructure works.'
  },
  {
    icon: <FaIndustry />,
    title: 'Structural Engineering',
    description: 'Engineering solutions for bridges, warehouses, terminals and heavy-duty facilities.'
  },
  {
    icon: <FaWater />,
    title: 'Dredging & Land Reclamation',
    description: 'Channel deepening, berth maintenance and coastal land creation.'
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Repair Services',
    description: 'Inspection, rehabilitation and upkeep of existing marine and civil assets.'
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Project Management & Consulting',
    description: 'Comprehensive planning, supervision and advisory for complex maritime and energy projects.'
  }
];

const Services = () => {
  return (

<section className="py-12 bg-gray-90" >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 uppercase">OUR SERVICES</h2>
        <p className="mt-4 text-lg text-gray-700">
          We Offer High End Services for Our Clients
        </p>
      </div>
    <div className={styles.servicesContainer} style={{ backgroundColor: 'rgba(169, 191, 209, 0.2)' }}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <div className={styles.icon}>{service.icon}</div>
          <div className={styles.text}>
            <h4 className={styles.title}>{service.title}</h4>
            <p className={styles.description}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Services;
