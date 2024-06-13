import MainButton from "../../../Modules/Button/MainButton";

export const DeleteBody = ({ triggerModal, action, actionLoading }) => {
  return (
    <>
      <p className="font-peyda">آیا از حذف دسته بندی موردنظر مطمئن هستید؟</p>
      <div className="flex items-center gap-2">
        <MainButton
          content={"بازگشت"}
          className={"!bg-primary text-btnText font-peyda"}
          onClick={() => triggerModal(false)}
        />
        <MainButton
          content={"حذف"}
          className={"!bg-secondary text-btnText font-peyda"}
          onClick={action}
          isLoading={actionLoading}
        />
      </div>
    </>
  );
};