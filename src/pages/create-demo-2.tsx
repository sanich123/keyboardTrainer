import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  useGetCommentsQuery,
  useGetTodosQuery,
  useAddCommentMutation,
} from '../redux/json-placeholder-API';


type TodosResponse = {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
};

type PostsResponse = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export function CreateDemo2() {
  const [comment, setComment] = useState('type comment');
  const [idComment, setId] = useState<null | number>(null);
  const { isLoading: todosLoading, data: todos, isError: todosError } = useGetTodosQuery('');
  const { isLoading: postsLoading, data: comments, isError: postsError } = useGetCommentsQuery('');
  const [addComment, { isSuccess, isError, error: postCommentError, data: response }] = useAddCommentMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warn('Вы успешно отправили данные на сервер');
    }
    if (isError) {
      toast.warn('Что-то пошло не так');
      console.log(postCommentError);
    }
    if (response) {
      console.log(response);
    }
  }, [isSuccess, isError, response, postCommentError]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addComment({
      idComment, ...{
        id: idComment,
        title: 'some title',
        body: comment,
        userId: idComment,
      },
    }).unwrap();
    // .then((onFullfilled) => console.log(onFullfilled))
    // .then((onRejected) => console.log(onRejected));
  };
  const handleChange = ({ target }: ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      setComment(value);
    }
  };

  return (
    <>
      <h1>Todos</h1>
      {todosLoading && <h1>Loading...</h1>}
      {todos?.length > 0 &&
        (todos as TodosResponse[])
          .slice(0, 10)
          .map(({ id, title }) => <li key={id}>{title}</li>)}
      {todosError && <h1>An error occured, check your internet connection</h1>}
      <h1>EMAILS</h1>
      {postsLoading && <h1>Loading...</h1>}
      {comments?.length > 0 &&
        (comments as PostsResponse[])
          .slice(0, 10)
          .sort((a, b) => a.id - b.id)
          .map(({ id, postId, email }) => (
            <li key={id} onClick={() => setId(id)}>
              {id} {postId} {email}
            </li>
          ))}
      {postsError && <h1>An error occured, check your internet connection</h1>}
      <form onSubmit={ handleSubmit }>
        <input type="text" value={comment} onChange={ handleChange } />
      </form>
    </>
  );
}
