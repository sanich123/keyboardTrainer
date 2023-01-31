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
  const { isLoading: postsLoading, data: comments, isError: postsError, error: sendCommentError } = useGetCommentsQuery('');
  const [addComment, { isSuccess, isError, data: response }] = useAddCommentMutation();

  useEffect(() => {
    if (isSuccess && response) {
      const { response: commentResponse } = response;
      if (commentResponse) {
        const { ok, status, url } = commentResponse;
        toast.warn(`Сервер ответил нам: была успешная операция - ${isSuccess}, была ошибка = ${isError}, и вот вам объект ${ok} ${status} ${url}`);
      }
    }
  }, [isSuccess, response, isError, sendCommentError]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addComment({
        idComment, ...{
          id: idComment,
          title: 'some title',
          body: comment,
          userId: idComment,
        },
      }).unwrap();
    } catch (err) {
      console.log(err);
    }
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
