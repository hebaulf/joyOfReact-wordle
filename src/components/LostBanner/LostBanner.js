import Banner from '../Banner/Banner';

const LostBanner = ({ answer, handleRestart }) => {
  return (
    <Banner
      status="sad"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default LostBanner;
