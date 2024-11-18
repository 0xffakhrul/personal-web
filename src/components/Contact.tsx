export const Contact = () => {
  return (
    <div className="space-y-3 flex flex-col items-center pt-4">
      <h2 className="text-white font-semibold text-lg">Contact Me</h2>
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/fakhrulradzi/" target="_blank">
          <img src="./linkedin.svg" alt="" className="h-6 w-6" />
        </a>
        <a href="https://github.com/0xffakhrul" target="_blank">
          <img src="./github.svg" alt="" className="h-6 w-6" />
        </a>
        <a href="mailto:fakhrulradzi.ad@gmail.com" target="_blank">
          <img src="./gmail.svg" alt="" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};
