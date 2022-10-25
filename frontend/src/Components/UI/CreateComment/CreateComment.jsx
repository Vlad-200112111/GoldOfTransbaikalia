import React,{ useState } from "react";
import api from '../../../Services/api'
function CreateComment({Publication}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [comment,setComment] = useState('')
  const CreateComment = async (e) =>{
      e.preventDefault()
     await api.Comments.CreateComment({new:Publication.id, content: comment}).then(()=>{
      setName('')
      setComment('')
      setEmail('')
     })
  }
  return (
    <div class="col-12 col-lg-6">
      <div class="p-3">
        <h2 class="mb-4">Оставить комментарий</h2>
        <form>
          <div class="row">
            <div class="mb-3 col-md-6">
              <label class="form-label" for="inputName">
                Имя
              </label>
              <input
                type="text"
                class="form-control rounded-0"
                id="inputName"
                value={name}
                onChange={(ev)=>setName(ev.target.value)}
                placeholder="Введите имя"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label class="form-label" for="inputEmail">
                Email
              </label>
              <input
                type="email"
                class="form-control rounded-0"
                id="inputEmail"
                value={email}
                onChange={(ev)=>setEmail(ev.target.value)}
                placeholder="Введите email..."
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="inputTextarea">
              Комментарий
            </label>
            <textarea
              class="form-control rounded-0"
              rows="6"
              id="inputTextarea"
              value={comment}
              onChange={(ev)=>setComment(ev.target.value)}
              placeholder="Ваш комментарий..."
            ></textarea>
          </div>
          <div class="text-end">
            <button onClick={CreateComment}
              type="submit"
              class="bg-success btn pe-4 ps-4 rounded-0 rounded-pill text-light text-uppercase"
            >
              <span class="align-middle">Отправить</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="16"
                width="16"
                class="ms-1"
              >
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateComment;
