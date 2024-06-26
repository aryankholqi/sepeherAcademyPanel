import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  label,
  variant,
  className,
  type = "text",
  register,
  startContent,
  endContent,
  isInvalid,
  errorMessage,
  isDisabled = false,
}) {
  return (
    <Input
      className={className}
      variant={variant}
      type={type}
      label={label}
      classNames={{
        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
        inputWrapper: [
          "bg-transparent border-1 dark:border-black-15 rounded-2xl",
        ],
        input: ["bg-transparent"],
        innerWrapper: ["bg-transparent"],
      }}
      placeholder={placeholder}
      {...register}
      startContent={startContent}
      endContent={endContent}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
    />
  );
}
