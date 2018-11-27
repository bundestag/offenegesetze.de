import React from 'react';

import BaseContent from '../components/layout/base-content';

const Ueber = () => (
  <BaseContent>
    <h1 className="title">Kontakt</h1>
    <p>
      Offene Gesetze ist ein ehrenamtliches Projekt des gemeinnützigen Open Knowledge Foundation Deutschland e.V.
      
  Das Projekt wurde entwickelt von {' '}<a href="https://johannesfilter.com">Johannes Filter</a>, {' '}<a href="https://stefanwehrmeyer.com">Stefan Wehrmeyer</a> und {' '}<a href="https://twitter.com/arnesemsrott">Arne Semsrott</a>. Das Team ist erreichbar unter {' '}
      <a className="highlight" href="mailto:info@offenegesetze.de">
        info@offenegesetze.de
      </a>.<br />
    </p>
    <br />
    <p>
      Man kann uns auf{' '}
      <a className="highlight" href="https://twitter.com/offenegesetze">
        Twitter folgen
      </a>{' '}
      und{' '}
      <a className="highlight" href="https://www.facebook.com/offenegesetze/">
        Facebook liken
      </a>.
    </p>
    <h2>Impressum</h2>
    <br />
    <dl>
      <dt>Vereinsadresse:</dt>
      <dd>
        Open Knowledge Foundation Deutschland e.V.<br />
        Singerstr. 109<br />
        10179 Berlin<br />
        Deutschland<br />
        <br />
      </dd>
    </dl>
    <dl>
      <dt>Vereinsregister Nr:</dt>
      <dd>VR 30468 B</dd>
      <dt>Umsatzsteuernummer:</dt>
      <dd>DE278022128</dd>
    </dl>
    <dl>
      <dt>E-Mail:</dt>
      <dd>
        <a href="mailto:info@okfn.de">info@okfn.de</a> (<a href="https://pgp.mit.edu/pks/lookup?op=get&amp;search=0xFE54F46F21DDAED1">
          OpenPGP
        </a>)
      </dd>
      <dt>Telefon:</dt>
      <dd>
        <a href="tel:+49 30 57703666 2">+49 30 57703666 0</a>
      </dd>
      <dt>Fax:</dt>
      <dd>
        <a href="fax:+49 30 57703666 9">+49 30 57703666 9</a>
      </dd>
    </dl>
  </BaseContent>
);

export default Ueber;
