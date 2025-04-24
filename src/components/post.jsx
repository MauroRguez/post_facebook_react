import { useState } from "react";
import CommentForm from "./commentform";
import ListComment from "./listcomments";

let Post = () => {
  let [likes, setLikes] = useState(0);
  let [BtnComment, setBtnComment] = useState(false);
  let [listCom, setListCom] = useState([
    { id: 1, comment: "Me encanta este lugar" },
    { id: 2, comment: "El mejor dentista de la ciudad" },
    { id: 3, comment: "Me siento muy feliz con mi sonrisa" },
    { id: 4, comment: "El mejor servicio de odontologia" },
  ]);

  let isShowComment = () => setBtnComment(!BtnComment);

  // Función para agregar un nuevo comentario
  const addComment = (newComment) => {
    setListCom([...listCom, { id: listCom.length + 1, comment: newComment }]);
  };

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        backgroundColor: "#1c1c1c", // Fondo oscuro
        color: "white", // Letras blancas
      }}
    >
      {/* Encabezado con foto y nombre */}
      <div
        className="card-header d-flex align-items-center"
        style={{ borderBottom: "1px solid #444" }}
      >
        <img
          src="https://scontent.feoh6-1.fna.fbcdn.net/v/t39.30808-6/468537675_10160232757436630_9089525188857629926_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGoRQswwf_hT6q7Xy6LJxvCENsvlPQoJDkQ2y-U9CgkOSAmL5ZkSt8-x03xqnHhw7M&_nc_ohc=Uo79071ETxQQ7kNvwEYXglA&_nc_oc=AdlNADVP5pyaL-VHdkdl9Ixn4i6i-ewr_sGeJC28GhGY2M5rO4bMagESR9Epj6iIjbY&_nc_zt=23&_nc_ht=scontent.feoh6-1.fna&_nc_gid=05T2Ry3PBBU9MHiGQBmBDg&oh=00_AfHAlulGiZgNnqTYNVmHpl_8geyTOIL_NbZnHxqy3784Gw&oe=680F711A" // Reemplaza con el link de la foto
          alt="Foto de perfil"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <span style={{ fontWeight: "bold" }}>Mauricio Rodriguez</span>
      </div>

      <div className="card-body">
        <p className="card-text">
          "Ser odontólogo es más que cuidar dientes; es devolver sonrisas,
          confianza y calidad de vida. Cada paciente es una oportunidad de
          transformar una historia, y cada sonrisa lograda es un reflejo del
          esfuerzo."
        </p>
        <img
          src={
            "https://www.colegiodentistas.org/wp-content/uploads/2022/09/perfil-profesional-del-odontologo-general-image.jpg"
          }
          className="card-img-top"
          alt="..."
        />
      </div>
      <ul className="list-group list-group-flush">
        <li
          className="list-group-item d-flex justify-content-around"
          style={{
            backgroundColor: "#1c1c1c",
            color: "white",
            borderTop: "1px solid #444",
          }}
        >
          <span>👍😂😁 {likes}</span>
          <span>{listCom.length} 🗨️</span>{" "}
          {/* Aquí se muestra el número de comentarios */}
        </li>
        <li
          className="list-group-item d-flex justify-content-around"
          style={{
            backgroundColor: "#1c1c1c",
            color: "white",
            borderTop: "1px solid #444",
          }}
        >
          <button
            className="btn btn-secondary"
            onClick={() => setLikes(likes + 1)}
          >
            👍Likes
          </button>
          <button className="btn btn-secondary" onClick={isShowComment}>
            🗨️Comment
          </button>
        </li>
      </ul>
      <div
        className="card-footer"
        style={{
          backgroundColor: "#1c1c1c",
          color: "white",
          borderTop: "1px solid #444",
        }}
      >
        {BtnComment && <CommentForm addComment={addComment} />}
      </div>
      {/* Mostrar comentarios solo si BtnComment es true */}
      {BtnComment && <ListComment listComData={listCom} />}
    </div>
  );
};

export default Post;
