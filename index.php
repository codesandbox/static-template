<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/caja-novedades.css">
    <title>Ultimas novedades</title>
  </head>
  <body>
  <div class="eventos">	
		
        <h2 class="updates">Últimas Novedades</h2><hr>	
			<?php 
				for ($i=0; $i<4; $i++) {
			?>	

			<div class="evento">
				<div class="titulo-y-fecha">
					<div class="fecha">
						<p>{fecha}</p>
					</div>
					<div class="titulo">
						<h3>{titulo}</h3>
					</div>
				</div>
				<p>{texto}...<a href="{link-novedad}.php">+info</a></p>
			</div>

			<?php
				} 
			?>
				
		</div>
	
</body>
</html>