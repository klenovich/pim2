import { Database } from '@/lib/schema';
import { Session, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';

type Item = Database['public']['Tables']['items']['Row'];

interface NewItemFields {
  name: string;
  desc: string;
  quantity: number;
  area: string;
  container: string;
  images: {
    images: string[];
    descriptions: string[];
    aiDescriptions: string[];
  };
  attributes: {
    color: string | null;
    type: string | null;
    size: string | null;
    material: string | null;
    dimensions: string | null;
    brand: string | null;
    weight: string | null;
    model: string | null;
    sku: string | null;
    pattern: string | null;
    condition: string | null;
  };
}

export default function ItemList({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<NewItemFields>({
    name: '',
    desc: '',
    quantity: 1, // Defaulting to 1 for simplicity
    area: '',
    container: '',
    images: {
      images: [],
      descriptions: [],
      aiDescriptions: [],
    },
    attributes: {
      color: null,
      type: null,
      size: null,
      material: null,
      dimensions: null,
      brand: null,
      weight: null,
      model: null,
      sku: null,
      pattern: null,
      condition: null,
    }
  });
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('error', error);
      } else {
        setItems(data || []);
      }
    };

    fetchItems();
  }, [supabase]);

  const addItem = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('items')
      .insert([
        {
          ...newItem, 
          dateAdded: new Date().toISOString(), 
          lastUpdate: new Date().toISOString()
        }
      ])
      .single();

    if (error) {
      setErrorText(error.message);
    } else if (data) {
      setItems([...items, data]);
      // Reset newItem
      setNewItem({
        name: '',
        desc: '',
        quantity: 1,
        area: '',
        container: '',
        images: {
          images: [],
          descriptions: [],
          aiDescriptions: [],
        },
        attributes: {
          color: null,
          type: null,
          size: null,
          material: null,
          dimensions: null,
          brand: null,
          weight: null,
          model: null,
          sku: null,
          pattern: null,
          condition: null,
        }
      });
      setErrorText(''); // Clear any errors on success
    }
  };

  const handleInputChange = (name: string, value: string | number | string[]) => {
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttributeChange = (name: string, value: string) => {
    setNewItem((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [name]: value
      }
    }));
  };

  const deleteItem = async (id: number) => {
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) {
      console.error('error', error);
    } else {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="w-full">
      <h1 className="mb-12">Items List</h1>
      <form onSubmit={addItem} className="flex flex-col gap-4">
        <input
          name="name"
          value={newItem.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Item Name"
          required
          className="p-2 border rounded"
        />
        <textarea
          name="desc"
          value={newItem.desc}
          onChange={(e) => handleInputChange('desc', e.target.value)}
          placeholder="Description"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={(e) => handleInputChange('quantity', Number(e.target.value))}
          placeholder="Quantity"
          required
          min="0"
          className="p-2 border rounded"
        />
        <input
          name="area"
          value={newItem.area}
          onChange={(e) => handleInputChange('area', e.target.value)}
          placeholder="Area"
          className="p-2 border rounded"
        />
        <input
          name="container"
          value={newItem.container}
          onChange={(e) => handleInputChange('container', e.target.value)}
          placeholder="Container"
          className="p-2 border rounded"
        />
        {/* Repeat this structure for each image input needed */}
        <input
          type="url"
          name="image"
          // Placeholder for adding new image inputs
          placeholder="Image URL"
          className="p-2 border rounded"
        />
        {/* Repeat this structure for each image description input needed */}
        <input
          name="imageDescription"
          // Placeholder for adding new image description inputs
          placeholder="Image Description"
          className="p-2 border rounded"
        />
        {/* Attributes here */}
        <input
          name="color"
          value={newItem.attributes.color || ''}
          onChange={(e) => handleAttributeChange('color', e.target.value)}
          placeholder="Color"
          className="p-2 border rounded"
        />
        {/* Continue with other attribute inputs, like type, size, etc. */}
        {/* For example: */}
        <input
          name="type"
          value={newItem.attributes.type || ''}
          onChange={(e) => handleAttributeChange('type', e.target.value)}
          placeholder="Type"
          className="p-2 border rounded"
        />
        {/* ... repeated for all attributes ... */}
        <button className="btn-black p-2 border rounded" type="submit">Add Item</button>
      </form>
      {!!errorText && <div className="text-red-600 p-2 rounded">{errorText}</div>}
      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="p-4 border-b border-gray-200">
              {/* Item details and delete button */}
              <span>{item.name}</span>
              <button 
                onClick={() => deleteItem(item.id)} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}