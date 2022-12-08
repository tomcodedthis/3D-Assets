export default function UploadBtn(props: any) {
  return (
    <button
      className={`absolute top-6 right-6 text-lg font-semibold uppercase py-2 px-4 ${
        props.darkMode
          ? "bg-gray-700 border-white hover:bg-gray-800"
          : "bg-gray-300 border-black hover:bg-gray-400"
      } bg-gray-700 border-2 border-white rounded-lg duration-300 hover:scale-105`}
      onClick={() => props.setUploadShown(true)}
    >
      Upload Model
    </button>
  );
}
