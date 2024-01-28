/* eslint-disable no-unused-vars */
import './App.css'

function insert(num) {
    const textarea = document.form.textarea;
    const  jumlah = textarea.value;

    const operator =['+','-','*','/','.','00','%'];

    if (jumlah === '0' && operator.includes(num)) {
      if (jumlah === '0' && num === '.') {
        textarea.value = jumlah + num;
      }else{
        return;
      }
    }

    if (jumlah === '0' && num ==='0') {
      if (jumlah.length === 1 && jumlah === '0') {
        return;
      }else{
        textarea.value = jumlah + num;
      }
    }else{
      if (jumlah.length === 1 && jumlah === '0') {
        textarea.value = num
      }else{
        textarea.value = jumlah + num;
      }
    }

    if (operator.includes(num)) {
       const laschar = jumlah.charAt(jumlah.length -1);
      if (operator.includes(laschar)) {
        textarea.value = jumlah.slice(0, -1) + num;
      }else{
        textarea.value = jumlah + num;
      }
    }
}
function clean(){
  document.form.textarea.value = '0';

}

function del(){
  
  const hasil = document.form.textarea.value;
  
  if (hasil.length === 1) {
    document.form.textarea.value = '0';
  }else{
    document.form.textarea.value = hasil.substring(0, hasil.length -1);
  }

}
function equal(){
  const hasil = document.form.textarea.value;

  const las = hasil.charAt(hasil.length -1);

  if (las.includes('%')) {

    const nilai = hasil.substring(0, hasil.length -1);

    document.form.textarea.value = (nilai / 100);
  }else{
    document.form.textarea.value = eval(hasil);
  }
}

function Home() {
    return (
            <>
              <div className="container">
                  <form name="form">
                    <input type="textarea" readOnly value={0} name='textarea' className='textarea' />
                  </form>
                  <div className="buttons">

                    <input type="button" className="operator" value={'C'} onClick={() => clean()} />
                    <input type='button' className="operator" value={'DEL'} onClick={() => del()} />
                    <input type='button' className="operator" value={'+'} onClick={() => insert('+')} />
                    <input type='button' className="operator" value={'-'} onClick={() => insert('-')} />
                    
                    <input type='button' className="button" value={1} onClick={() => insert(1)} />
                    <input type='button' className="button" value={2} onClick={() => insert(2)} />
                    <input type='button' className="button" value={3} onClick={() => insert(3)} />
                    <input type='button' className="operator" value={'/'} onClick={() => insert('/')} />
                    
                    <input type='button' className="button" value={4} onClick={() => insert(4)} />
                    <input type='button' className="button" value={5} onClick={() => insert(5)} />
                    <input type='button' className="button" value={6} onClick={() => insert(6)} />
                    <input type='button' className="operator" value={'*'} onClick={() => insert('*')} />

                    <input type='button' className="button" value={7} onClick={() => insert(7)} />
                    <input type='button' className="button" value={8} onClick={() => insert(8)} />
                    <input type='button' className="button" value={9} onClick={() => insert(9)} />
                    <input type='button' className="operator" value={'.'} onClick={() => insert('.')} />
                    
                    <input type="button" className="operator" value={'0'} onClick={() => insert('0')} />
                    <input type='button' className="operator" value={'00'} onClick={() => insert('00')} />
                    <input type='button' className="operator" value={'%'} onClick={() => insert('%')} />
                    <input type='button' className="operator" value={'='} onClick={() => equal()} />
                  </div>
              </div>
            </>
          )
        }

export default Home;



