import React from "react";

export const InputField = field => {
  const { error, touched } = field.meta;

  return (
    <>
      <input {...field.input} className="form-control" placeholder={field.placeholder} id={field.id} />
      {error && touched && (<div className="text-danger">{error}</div>)}
    </>
  );
};
