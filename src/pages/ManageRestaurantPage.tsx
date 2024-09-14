import ManageRestaurantForm from "../../forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm.tsx";
import { useCreateMyRestaurant } from "../api/MyRestaurantApi.tsx";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
