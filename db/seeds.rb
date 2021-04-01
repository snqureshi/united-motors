# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Car.destroy_all
Model.destroy_all
Make.destroy_all

@admin = User.create!(username: 'admin', email: 'shammaq@gmail.com', password_digest: '1234567')

puts "#{User.count} users created"

@acura = Make.create!(name: 'acura')
@alfa_romeo = Make.create!(name: 'alfa-romeo')
@aston_martin = Make.create!(name: 'aston-martin')
@audi = Make.create!(name: 'audi')
@bentley = Make.create!(name: 'bentley')
@bmw = Make.create!(name: 'bmw')
@bugatti = Make.create!(name: 'bugatti')
@buick = Make.create!(name: 'buick')
@cadillac = Make.create!(name: 'cadillac')
@chevrolet = Make.create!(name: 'chevrolet')
@chrysler = Make.create!(name: 'chrysler')
@citroen = Make.create!(name: 'citroen')
@dodge = Make.create!(name: 'dodge')
@ferrari = Make.create!(name: 'ferrari')
@fiat = Make.create!(name: 'fiat')
@ford = Make.create!(name: 'ford')
@geely = Make.create!(name: 'geely')
@genesis = Make.create!(name: 'genesis')
@gm = Make.create!(name: 'gm')
@gmc = Make.create!(name: 'gmc')
@honda = Make.create!(name: 'honda')
@hyundai = Make.create!(name: 'hyundai')
@infiniti = Make.create!(name: 'infiniti')
@jaguar = Make.create!(name: 'jaguar')
@jeep = Make.create!(name: 'jeep')
@kia = Make.create!(name: 'kia')
@koenigsegg = Make.create!(name: 'koenigsegg')
@lamborghini = Make.create!(name: 'lamborghini')
@lancia = Make.create!(name: 'lancia')
@land_rover = Make.create!(name: 'land rover')
@lexus = Make.create!(name: 'lexus')
@lincoln = Make.create!(name: 'lincoln')
@lotus = Make.create!(name: 'lotus')
@maserati = Make.create!(name: 'maserati')
@maybach = Make.create!(name: 'maybach')
@mazda = Make.create!(name: 'mazda')
@mclaren = Make.create!(name: 'mclaren')
@mercedes = Make.create!(name: 'mercedes')
@mini = Make.create!(name: 'mini')
@mitsubishi = Make.create!(name: 'mitsubishi')
@nissan = Make.create!(name: 'nissan')
@opel = Make.create!(name: 'opel')
@pagani = Make.create!(name: 'pagani')
@peugeot = Make.create!(name: 'peugeot')
@pontiac = Make.create!(name: 'pontiac')
@porsche = Make.create!(name: 'porsche')
@ram = Make.create!(name: 'ram')
@renault = Make.create!(name: 'renault')
@rolls_royce = Make.create!(name: 'rolls-royce')
@skoda = Make.create!(name:'skoda')
@smart = Make.create!(name:'smart')
@subaru = Make.create!(name:'subaru')
@suzuki = Make.create!(name:'suziki')
@tesla = Make.create!(name:'tesla')
@toyota = Make.create!(name:'toyota')
@volkswagen = Make.create!(name:'volkswagen')
@volvo = Make.create!(name:'volvo')

puts "#{Make.count} makes created"

@acura_ixl = Model.create!(name: 'ixl', make: @acura)
@acura_mdx = Model.create!(name: 'mdx', make: @acura)
@acura_nsx = Model.create!(name: 'nsx', make: @acura)
@acura_rdx = Model.create!(name: 'rdx', make: @acura)
@acura_rlx = Model.create!(name: 'rlx', make: @acura)
@acura_tlx = Model.create!(name: 'tlx', make: @acura)
@acura_integra = Model.create!(name: 'integra', make: @acura)
@acura_rl = Model.create!(name: 'rl', make: @acura)
@acura_tl = Model.create!(name: 'tl', make: @acura)
@acura_tsx = Model.create!(name: 'tsx', make: @acura)
@ar_33_stradale = Model.create!(name: '33 stradale', make: @alfa_romeo)
@ar_8c = Model.create!(name: '8C', make: @alfa_romeo)
@ar_giulia = Model.create!(name: 'Giulia', make: @alfa_romeo)
@ar_stelvio = Model.create!(name: 'stelvio', make: @alfa_romeo)
@ar_147 = Model.create!(name: '147', make: @alfa_romeo)
@ar_149 = Model.create!(name: '149', make: @alfa_romeo)
@ar_159 = Model.create!(name: '159', make: @alfa_romeo)
@ar_4c = Model.create!(name: '4C', make: @alfa_romeo)
@ar_brera = Model.create!(name: 'brera', make: @alfa_romeo)
@ar_giulietta = Model.create!(name: 'giulietta', make: @alfa_romeo)
@ar_gt = Model.create!(name: 'gt', make: @alfa_romeo)
@ar_milano = Model.create!(name: 'milano', make: @alfa_romeo)
@ar_mito = Model.create!(name: 'MiTo', make: @alfa_romeo)
@ar_spider = Model.create!(name: 'spider', make: @alfa_romeo)

puts "#{Model.count} models created"

@car1 = Car.create!(user: @admin, img_url: 'https://media.ed.edmunds-media.com/acura/mdx/2020/oem/2020_acura_mdx_4dr-suv_sh-awd-pmc-edition_fq_oem_1_1600.jpg', make:'Acura', model: @acura_mdx, color: 'red', year: 2022, mileage: 0, price: 46900, description:'The redesigned 2022 MDX houses a 290-HP81 V-6 engine paired to a new double-wishbone front suspension for precision cornering. Handling is further enhanced by the Integrated Dynamics System and available wider 20-in alloy wheels for adrenaline-inducing performance. Be ready for most any drive with available Super Handling All-Wheel Drive™ (SH-AWD®) and a max towing capacity of up to 5,000 lbs.99')
@car2 = Car.create!(user: @admin, img_url: 'https://www.fullertonalfaromeo.com/inventoryphotos/4746/zarfanan3m7643217/ip/3.jpg?width=2000', make:'Alfa Romeo', model: @ar_giulia, color: 'black', year: 2021, mileage: 0, price: 43690, description:'The 2020 Giulia is available in three main trim levels: the base Giulia, the Ti and the high-performance Quadrifoglio. The Giulia and Ti models are powered by a turbocharged 2.0-liter four-cylinder engine (280 horsepower, 306 lb-ft) that puts its power to the rear wheels through an eight-speed automatic transmission. All-wheel drive is also available for all 2.0-liter cars. The Quadrifoglio uses a turbocharged 2.9-liter V6 engine (505 hp, 443 lb-ft).')

puts "#{Car.count} cars created"