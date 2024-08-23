import './Sign.css';

export default function Sign(props) {
  return (
    <section className='sign'>
      <p className='sign__name'>{props.sign.name}</p>
      <p>{props.sign.period}</p>
      <p>{props.sign.icon}</p>
    </section>
  );
}
