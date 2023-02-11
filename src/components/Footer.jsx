import './Footer.css'

const Footer = () => {
  return (
    <div className="d-flex justify-content-center">
      <h4 className="footer-title">
        Weather app by{' '}
        <span className="name">
          <a href='https://github.com/dev-rioma'>DevRioma</a>
        </span>{' '}
      </h4>
    </div>
  );
}

export default Footer