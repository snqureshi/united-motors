class MakesController < ApplicationController
  before_action :set_make, only: [:show]

  # GET /makes
  def index
    @makes = Make.all
    render json: @makes
  end

  # GET /makes/1
  def show
    @make = Make.find(params[:id])
    render json: @make
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_make
      @make = Make.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def make_params
      params.require(:make).permit(:name)
    end
end
