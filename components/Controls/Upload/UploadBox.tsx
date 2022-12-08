import { faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadBox(props: any) {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [infoHover, setInfoHover] = useState(false);

  return (
    <div
      className={`absolute top-[20vh] left-[15vw] h-[50vh] w-[70vw] ${
        props.uploadShown ? "flex" : "hidden"
      } justify-center items-center rounded-lg`}
    >
      <div className="absolute top-4 right-4 flex gap-2 items-center">
        <button
          className="w-20 aspect-square p-2 cursor-default"
          onMouseEnter={() => setInfoHover(true)}
          onMouseLeave={() => setInfoHover(false)}
        >
          <FontAwesomeIcon
            className={`w-full h-full duration-300 hover:opacity-70`}
            icon={faQuestion}
          />

          <div
            className={`${
              infoHover ? "block" : "hidden"
            } fixed right-[18%] mt-4 flex gap-2 p-4 bg-gray-600 rounded-lg border-4 border-gray-800 leading-relaxed`}
          >
            Must be in GLFT format and include: <br />
            textures folder <br />
            scene.bin <br />
            scene.gltf <br />
          </div>
        </button>

        <button
          className="w-24 aspect-square p-2 duration-300 hover:opacity-70"
          onClick={() => props.setUploadShown(false)}
        >
          <FontAwesomeIcon icon={faXmark} className={`w-full h-full`} />
        </button>
      </div>

      <div
        className={`w-full h-full flex items-center justify-center p-6 text-center text-4xl ${
          props.darkMode
            ? "bg-gray-700 border-white hover:bg-gray-800"
            : "bg-gray-300 border-black hover:bg-gray-400"
        } border-2 rounded-xl duration-300 cursor-pointer`}
        {...getRootProps()}
      >
        <input className="w-full" {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your folder</p>
        ) : (
          <p>Drag your folder here, or click to select folder</p>
        )}
      </div>
    </div>
  );
}
