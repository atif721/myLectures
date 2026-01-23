const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="text-6xl mb-4">🎉</div>
      <p className="text-2xl font-semibold text-green-600 mb-2">All tasks completed!</p>
      <p className="text-gray-500 text-lg">Enjoy your well-deserved break</p>
    </div>
  );
};

export default WelcomeMessage;
