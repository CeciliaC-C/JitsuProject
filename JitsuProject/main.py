import os
import supabase as sb
import pandas as pd
import json


def connect_to_client():
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_KEY")
    client = sb.create_client(url, key)
    return client


def fetch_register(client):
    response = client.table('Register').select("*").execute()
    return response

def fetch_members(client):
    response = client.table('Members').select("*").execute()
    return response


def fetch_new_id(client):
    data, count = client.table('Register').select("id").execute()
    new_id = data[1][len(data[1])-1]['id'] + 1
    return new_id


def add_data(client,data):
    new_id = fetch_new_id(client)
    new_data = dict({'id': new_id}, **data)
    data, count = client.table('Register').insert(new_data).execute()
    return 0


def get_members_from_file():
    members = pd.read_csv('members.csv',usecols=["Names","Grade"])
    return members


def run_me():
    """"Connecting to supabase"""
    client = connect_to_client()


    """ADDING DATA"""

    data = {"test": "Denmark"}
    # add_data(client,data)
    register = fetch_register(client)   # Check it actually added correctly.
    print(fetch_members(client))

run_me()

# members = get_members_from_file()
# grade_groups = members['Grade'].unique()
# list_by_grade = pd.DataFrame(index=grade_groups,columns=['members'])
# for group in grade_groups:
#     group_members = members.loc[members['Grade'] == group]['Names'].to_list()
#     list_by_grade.loc[group,'members'] = group_members

# js_dict = {}
# for idx, row in list_by_grade.iterrows():
#     group_list = []
#     for item in row['members']:
#         new_dict = {'name':item}
#         group_list.append(new_dict)
#     js_dict[idx] = group_list

# with open('members_by_grade.json', 'w') as fp:
#     json.dump(js_dict, fp)



# print(members)
# var opt = {
#     "Dans":[
#         {name:"Dan"},
#         {name:"Chris H"}
#     ],
#     "Browns":[
#         {name:"Cecilia"},
#         {name:"Matt"}
#     ],
#     "Dark Blues":[
#         {name:"Tim"},
#         {name:"Matt M"}
#     ],
#     "Light Blues":[
#         {name:"Becca"},
#         {name:"Bee"}
#     ]
# };
