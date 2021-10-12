import geopandas as gpd
import argparse
import re

def convert_to_geojson(filename, out):
    '''
    Convert shapefiles to GeoJSON format for the web app version
    This is a very simple alternative to do such conversion,
    apart from using ogr2ogr
    '''
    shpext = re.findall("shp", filename)
    jsonext = re.findall("json", out)
    
    if shpext or jsonext:
        print('Please specify the input filename without the ".shp" extension or the output filename without ".json" extension')
    else:
        shpfile = gpd.read_file(f'{filename}.shp')
        shpfile.to_file(f'{out}.json', driver="GeoJSON")
        print(f'Conversion finished. Your GeoJSON output is {out}.json')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('filename', type=str, help='Specify your input Shapefile')
    parser.add_argument('out', type=str, help='Specify your GEOJson output path')

    args = parser.parse_args()
    convert_to_geojson(args.filename, args.out)