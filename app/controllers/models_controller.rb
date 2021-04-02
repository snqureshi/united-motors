class ModelsController < ApplicationController
  before_action :set_model, only: [:show]

  # GET /models
  def index
    @models = Model.all
    render json: @models
  end

  # GET /models/1
  def show
    @model = Model.find(params[:id])
    render json: @model, include: [:make, :cars]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_model
      @model = Model.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def model_params
      params.require(:model).permit(:make_id, :name, :trim)
    end
end
