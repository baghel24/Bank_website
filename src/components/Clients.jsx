import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[150px] min-w-[80px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[150px] w-[80px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;