class TechmentorsController < ApplicationController
    wrap_parameters format: []
    def index
      techmentors = Techmentor.all
      render json: techmentors
    end
  
    def show
      techmentors = Techmentor.find_by(id: params[:id])
      if techmentors
        render json: techmentors, status: :ok
      else
        render json: { error: "No such Techmentor exists" }, status: :not_found
      end
    end
  
    def destroy
      techmentors = Techmentor.find_by(id: params[:id])
      if techmentors
        techmentors.destroy
        head :no_content
      else
        render json: { error: "techmentors not found" }, status: :not_found
      end
    end
  
    def create
      techmentors = Techmentor.create(techmentor_params)
      if techmentors.save
        render json: techmentors, status: :created
      else
        render json: { error: "Techmentor not created" }, status: :not_found
      end
    end
  
    def update
      techmentors = Techmentor.find_by(id: params[:id])
      if techmentors
        techmentors.update(techmentor_params)
        render json: techmentors
      else
        render json: { error: "Techmentor not found" }, status: :not_found
      end
    end
  
    private
  
    def techmentor_params
      params.permit(:name, :email, :devskills, :id, :myavatar)
    end
end
